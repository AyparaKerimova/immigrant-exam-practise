const Immigrant = require("../models/immigrants");

const getAll=async(req,res)=>{
    try {
        const immigrants = await Immigrant.find();
        if (immigrants) {    
          return  res.status(200).json({
            message:"succesfully retrieved",
            data:immigrants          
        })
        } else {
            return  res.status(500).json({
                message:"no data found",
                data:null          
            })
        }
    } catch (error) {
        console.log('get error',error);
        
    }
};

const getOne =async(req,res)=>{
    const {id}= req.params;
    try {
        const immigrant = await Immigrant.findById(id);
        if (immigrant) {    
          return  res.status(200).json({
            message:"succesfully retrieved",
            data:immigrant          
        })
        } else {
            return  res.status(500).json({
                message:"no data found",
                data:null          
            })
        }
    } catch (error) {
        console.log('get error',error);
        
    }
};

const deleteOne =async(req,res)=>{
    const {id}= req.params;
    try {
        const immigrant = await Immigrant.findByIdAndDelete(id);
        if (immigrant) {    
          return  res.status(200).json({
            message:"succesfully deleted",
            data:immigrant          
        })
        } else {
            return  res.status(500).json({
                message:"no data found",
                data:null          
            })
        }
    } catch (error) {
        console.log('get error',error);
        
    }
};

const post =async(req,res)=>{
    const {name,description,imageUrl}= req.body;
    try {
        const newImmigrant = new Immigrant({
            name,description,imageUrl
        })
       await newImmigrant.save()
       res.status(200).json({
        message:"succesfully posted",
        data:newImmigrant          
    })
        
    } catch (error) {
        console.log('get error',error);
        
    }
};

module.exports = {getAll,getOne,deleteOne,post}