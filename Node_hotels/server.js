const express = require('express');
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');

const Person=require('./models/person');
app.use(bodyParser.json());



app.get('/', (req, res)=> {
  res.send('Welcome to my hotel..how can I help you?')
});


app.post('/',async(req,res)=>{
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
app.get('/',async(req,res)=>{
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

app.get('/:workType',async(req,res)=>{
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

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes)
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
  