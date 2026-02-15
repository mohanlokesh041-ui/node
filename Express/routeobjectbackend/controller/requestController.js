export const adddata = (req)=>{

    console.log(req.body);


    

} 


export const getdatabynumber = (req)=>{


    console.log(req.params);
    

}


export const getdataByQuery = (req)=>{

  console.log(req.query);
  

}

export const getdataByheaders = (req)=>{

  console.log(req.headers.jwttoken);
  

}