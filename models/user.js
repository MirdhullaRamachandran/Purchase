const mongoose=require('mongoose');
const userInfo= new mongoose.Schema({
    
    firstname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Invalid email address',
        },
    },
    password:{
        type:String,
        required:true,
        
    }
});
module.exports=mongoose.model('user',userInfo); //UserInfo- Schema //Mongoose Model(name)-user