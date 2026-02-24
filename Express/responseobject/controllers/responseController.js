export const createresonce = (req,res)=>{

  const {name} = req.body


  if(name==="React"){

    res.status(200).send("Yes I am React")

  }else{
    res.status(404).send("No I am Not React")
  }


}


export const getDataJson = (req,res)=>{

   

    //console.log(req.params);
    
const {userid} = req.params


const datas =[{ 
    id:1,
    name:'react',
    subject:"node"
    
},{ 
    id:2,
    name:'Node',
    subject:"Js"
    
}]

if(userid == 1){

    console.log(datas);
    
    res.status(200).json({

        success:true,
        message:"Data Fetched",
        userdatas:datas
    })
}else{
    res.status(404).json({
        msg:"No I am Not send the datas"
    })
}




}