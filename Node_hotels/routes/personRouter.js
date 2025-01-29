const express = require('express');
const router = express.Router();
const Person=require('../models/person');

router.post('/',async(req,res)=>{
    try{
      const data=req.body;
  
      const existingPerson = await Person.findOne({ email: data.email });
      if (existingPerson) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      const newPerson = new Person(data);
      const response=await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log("Error in saving person's data",err);
      res.status(500).json({error:'Internal server error'});
    }
  
    
  })
  router.get('/',async(req,res)=>{
    try{
      const data=await Person.find();
      console.log('All person fetched')
      res.status(200).json(data)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal server error'})
    }
  })
  
  router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef'||workType=='waiter'||workType=='manager'){
        const response= await Person.find({work: workType})
        console.log('worktype fetched')
        res.status(200).json(response)
      }else{
        res.status(404).json({error:"Invalid work type"});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
    }
  })
  router.put('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const updatedPersonData=req.body;
        const response=await Person.findByIdAndUpdate(personid,updatedPersonData,{ 
          new:true,
          runValidators:true
        });
        if(!response){
          return res.status(404).json({error:'Person not found'});
        }
        console.log("data saved");
        res.status(200).json(response)
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"})
    }
  })

  router.delete('/:id',async(req,res)=>{
    try{
      const personid=req.params.id;
      const response=await Person.findOneAndDelete(personid)
      if(!response){
        return res.status(404).json({error:'Person not found'});
      }
      console.log("data deleted");
      res.status(200).json({message:'Data deleted successfully'})
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"})
    }
  })

  //coment
  module.exports=router