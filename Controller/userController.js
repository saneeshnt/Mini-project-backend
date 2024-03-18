const userModel=require('../Model/userModel')
const jwt=require("jsonwebtoken")

const createToken=(userId)=>{
    const token =jwt.sign({userId},"JWT",{expiresIn :"24h"})
    return token;
}




module.exports.Signup=async(req,res,next)=>{
    const{email,password,username}=req.body;

    try{
        const emailExist=await UserModel.findOne({email:email});
        if(emailExist){
            return res.json({msg: "email already  exist",status:false});
              
        }
        const newUser= new UserModel({
            username:username,
            email:email,
            password:password,
        })
        const userDetails = await newUser.save() ;
        const token=createToken(userModel,_id);
        return res.json({
            msg: 'Sign up successfull',
            status:'true',
            token,
        })
        }catch(error){
            console.log(error);
            return res.json ({
                msg:"Internal server in sign up",
                status:false
            });


    }
}

