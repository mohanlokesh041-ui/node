import bcrypt from 'bcrypt'
import hashModel from '../modles/hashModle.js'
import jwt from 'jsonwebtoken'
export const add = async (req,res)=>{

    try {

        const {name,email,password} = req.body

        const checkEmail = await hashModel.findOne({email})
        
       if(checkEmail){
        return res.status(400).json({msg:"Already the email is exist"})
       }

       const saltRound = 10;

      const hashPassword = await bcrypt.hash(password,saltRound)
      
      const addData = await hashModel.create({name,email,password:hashPassword})
     

     res.status(200).json({msg:"Data Added Successfully",addData})


    } catch (error) {
        
        console.log('something error',error);
        
        res.status(500).json({msg:"Something issue",error})
        
    }
    
    

}


export const getData = async(req,res)=>{


    const data = await hashModel.find()

    res.status(200).json({info:data})

}




export const login = async(req,res)=>{


    try {
    //  Desducturing
     const {name,email,password} = req.body
     
     console.log(req.body);
     
      if(name==="" || email==="" || password===""){
        return res.status(400).json({msg:"Fill the form"})
     }

  const checkName = await hashModel.findOne({name})

     if(!checkName){

    return res.status(400).json({msg:"Invalid Name"})

     }

    

//    validating email check and get the specific data
     const checkEmail = await hashModel.findOne({email})

     if(!checkEmail){

    return res.status(400).json({msg:"Invalid Email"})

     }

    // password Check

    const checkPassword = await bcrypt.compare(password,checkEmail.password)
    if(!checkPassword){
        return res.status(400).json({msg:"Password Incorrect"})
    }


    // Token Generate

    const jwt_token = jwt.sign(
        {id:checkEmail._id,name:checkEmail.name},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"3h"}
    ) 
// return the token
   res.status(200).json({msg:"Login Successfully",token:jwt_token})
        
    } catch (error) {

        console.log('something error',error);
        res.status(500).json({msg:"Something error",error})
        
        
    }

}