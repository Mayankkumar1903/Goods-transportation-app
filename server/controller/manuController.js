const manuModel = require("../models/manuModel");
const bcrypt = require("bcrypt");

//create user or register user
exports.registerController = async (req,res)=>{
    try{
        const { email, password,companyName,companyLocation,phoneNumber} = req.body;
        //validation
        if( !email || !password ){
                return res.status(400).send({
                    success:false,
                    message:"Please fill all the required fields",
                });
        }
        //existing user 
        const existingUser = await manuModel.findOne({email});
        if(existingUser){
            return res.statu(401).send({
                success:false,
                message:"user already exists",
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);

        //save new userr 
        const user = new manuModel({email,password:hashedPassword,companyName,companyLocation,phoneNumber});
        await  user.save();
        return res.status(201).send({
            success:true,
            message:"New User Created",
            user,
        });
    }catch(error){
       console.log(error);
       return res.status(500).send({
        message: "Error In Register callback",
        success: false,
        error,
      });
    }
};


//login
exports.loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(401).send({
          success: false,
          message: "Please provide email or password",
        });
      }
      const user = await manuModel.findOne({ email });
      if (!user) {
        return res.status(200).send({
          success: false,
          message: "email is not registerd",
        });
      }
      //password
      const isMatch = await bcrypt.compare(password,user.password);
      if (!isMatch) {
        return res.status(401).send({
          success: false,
          message: "Invalid username or password",
        });
      }
      return res.status(200).send({
        success: true,
        messgae: "login successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error In Login Callback",
        error,
      });
    }
  };