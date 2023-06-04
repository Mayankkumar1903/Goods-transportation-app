const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const manuSchema=new Schema({
    email: {
        type: String,
        required : true,
        unique : [true, "Email id already registered"],
        
    },
    password: {
        type: String,
        required: [true,"password is required"],
    },
    companyName:{
        type:String,
        // required:[true,"companyName is required"],
    },
    companyLocation:{
        type:String,
        // required:[true,"companyLocation is required"],
    },
    phoneNumber:{
        type:Number,
        // required:[true,"phoneNumber is required",]
    },
});

const manuModel= mongoose.model("manufacturer",manuSchema);
module.exports = manuModel;