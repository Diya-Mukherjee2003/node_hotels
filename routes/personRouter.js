const express = require('express');
const router = express.Router();

router.post('/person',async(req,res)=>{
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
  router.get('/person',async(req,res)=>{
    try{
      const data=await Person.find();
      console.log('data fetched')
      res.status(200).json(data)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal server error'})
    }
  })
  
  router.get('/person/:workType',async(req,res)=>{
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
  module.exports=router