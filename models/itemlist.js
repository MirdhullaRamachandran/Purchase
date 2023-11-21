const mongoose=require('mongoose');
const ItemInfo= new mongoose.Schema({
    beverages:{
        name:{
            type:String,
            required:[true,"Name is required"],
            unique:true,
        },
        weight:{
            type:String,
        }
    },
    dairy:[{
        name:{
            type:String,
            required:[true,"Name is required"],
            unique:true
        },
        weight:{
            type:String,
        }
    }],
    oil:[{
        name:{
            type:String,
            required:[true,"Name is required"],
            unique:true,
        },
        weight:{
            type:String,
        }
    }],
    vegetables:[{
        name:{
            type:String,
            required:[true,"Name is required"],
            unique:true
        },
        weight:{
            type:String,
        }
    }],
    
})


module.exports=mongoose.model('item',ItemInfo); //ItemInfo- Schema //Mongoose Model(name)-item
