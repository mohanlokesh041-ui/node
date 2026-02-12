import fs from 'fs'


//console.log(fs);

// Create File
// fs.writeFile(fileName,data,callbackFunc)
fs.writeFile("create.txt","This is a New File to handle the Node Process",(err)=>{

  if(err){
    console.log('File Create Failed');
    return
  }
 
  console.log('File Created Succfully done');
  

})


// Read
// fs.readFile(fileName,Encoding,callbackFunc)

fs.readFile("create.txt","utf-8",(err,data)=>{
 
 if(err){

  console.log('File Read Failed');
    return

 }
 
 console.log(data);
 

})





// Update
// fs.appendFile(fileName,data,callbackFunc)


fs.appendFile("create.txt","n/Added New Values",(err)=>{
  
 if(err){

  console.log('File Update Failed');
    return

 }
 
 console.log("File Update Succfully done");
  

})

// Delete
// fs.unlink(fileName,callbackFunc)


fs.unlink("create.txt",(error)=>{

  if(error){
    console.log('File Not Deleted');
    return
    
  }

  console.log("file deleted successfully");
  

})