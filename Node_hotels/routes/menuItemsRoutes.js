const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST Method to add a Menu Item
router.post('/', async (req, res) =>{
    try{
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Menu Item saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

// GET method to get the Menu Items
router.get('/', async (req, res) =>{
    try{
        const data = await MenuItem.find();
        console.log('All Menu Item fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:taste', async (req, res) =>{
    try{
        const tasteType = req.params.taste; // // Extract the taste type from the URL parameter
        if(tasteType == 'Sweet' || tasteType == 'Sour' || tasteType == 'Spicy' ){
            const response = await MenuItem.find({taste: tasteType});
            console.log('Tastetype fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid Taste type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const menuid=req.params.id;
        const updatedmenudata=req.body;
        const response=await MenuItem.findByIdAndUpdate(menuid,updatedmenudata);
        if(!response){
            console.log("MenuItem not found");
        }
        console.log("Menu Item updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server error"});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const menuid=req.params.id;
        const response=await MenuItem.findByIdAndDelete(menuid);
        if(!response){
            console.log("MenuItem not found");
        }
        console.log("Menu Item deleted");
        res.status(200).json({message:'Data deleted successfully'})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

// comment added for testing purposes
module.exports = router;