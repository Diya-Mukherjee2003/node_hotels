const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to my hotel..how can I help you?')
})
app.get('/chicken',(req,res)=>{
    res.send("Chicken is out of stock");
})

app.listen(3000)