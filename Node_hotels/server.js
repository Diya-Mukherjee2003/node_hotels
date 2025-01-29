const express = require('express');
const app = express();
const db=require('./db');
const bodyParser=require('body-parser');

const Person=require('./models/person');
const MenuItem=require('./models/MenuItem');
app.use(bodyParser.json());



app.get('/', (req, res)=> {
  res.send('Welcome to my hotel..how can I help you?')
});
const personRoutes=require("./routes/personRouter");
app.use('/person',personRoutes);

const MenuRoutes=require("./routes/menuItemsRoutes");
app.use('/MenuItem',MenuRoutes);
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
  