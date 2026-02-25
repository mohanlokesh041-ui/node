import departmentModel from '../models/departmentModel.js'
export const added = async  (req,res) => {


try {

    const addData = await departmentModel.create(req.body)
    res.status(201).json({msg:"Successfully Done",addData})
    
} catch (error) {

    console.log("Somethimng error",error);
    
    
}


    
}

export const get = async (req,res)=>{

    try {

        const getData = await departmentModel.find()

        res.status(200).json({msg:getData})
        
    } catch (error) {

        console.log('error',error);
        
        
    }

}


export const getByID = async (req,res)=>{

    try {

        const getbyid = await departmentModel.findById(req.params.userid)
        res.status(200).json({idbaseddata:getbyid})
        
    } catch (error) {
          console.log('error',error);
    }



}



export const updatedata = async (req,res)=>{

    //console.log(req);

    try {
      
        const updateData = await departmentModel.findByIdAndUpdate(req.params.userid,req.body)
        res.status(200).json({msg:'Updated Succfully'})
        
    } catch (error) {

         console.log('error',error);
        
    }
    

}


export const deletedata = async (req,res)=>{

    //console.log(req);

    try {
      
        const deleteData = await departmentModel.findByIdAndDelete(req.params.userid)
        res.status(200).json({msg:'Deleted Successfully'})
        
    } catch (error) {

         console.log('error',error);
        
    }
    

}