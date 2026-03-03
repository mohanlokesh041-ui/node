import { useState } from "react"
import axios from 'axios'
const App = () => {

const [formData,setFormData] = useState({name:"",email:"",password:""})

const [data,setData] = useState("")


const handleChange = (e)=>{

  const values = e.target.value

  const valueName = e.target.name

  setFormData({...formData,[valueName]:values})
}



const handleSubmit = async(e)=>{

  try{
    e.preventDefault()


  const res = await axios.post("http://localhost:5000/api/hashed/logindata",formData)
   
   setFormData({name:"",email:"",password:""})

  // console.log(res);

  if(res.data.msg==="Login Successfully"){

    return setData(res.data.token)
  }else{
    return setData(res.data.msg)
  }

   
 


  }catch(error){

    console.log(error.response.data.msg);

    setData(error.response.data.msg)
    
  }
  


}



  return (<>


   <form onSubmit={handleSubmit}>
     
     <input type="text" placeholder="Enter the Name" name="name" value={formData.name} onChange={handleChange} />
     <input type="email" placeholder="Enter the Email" name="email" value={formData.email} onChange={handleChange} />
     <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
     <input type="submit" value={"Login"} />
   </form>

<h1>
     {data}
</h1>
   

  </>)

}


export default App