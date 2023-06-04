const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const tranSchema=new Schema({
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
    phoneNumber:{
        type:Number,
        // required:[true,"phoneNumber is required",]
    }
});

const transModel = mongoose.model("transporter",tranSchema);
module.exports = transModel;