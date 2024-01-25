import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import  "./UpdateUser.css"

export const  UpdateUser=()=> {
   const navigate=useNavigate()
    const {id}=useParams()
    const [userData,setUserData]=useState({
        name:"",
        phone:"",
        email:"",
       
    })
    const handleInput = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUserData({
          ...userData,
          [name]: value,
        });
       
      };

      const handleSubmit = (e) => {
        // console.log("handle submit",e)
        e.preventDefault();
        // console.log(user);
      
        let headersList = {
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "name":userData.name,
             "phone":userData.phone,
             "email":userData.email
           });
           console.log(bodyContent)
            fetch(`http://localhost:5000/api/admin/user/update/${id}`, { 
             method: "PATCH",
             body: bodyContent,
             headers: headersList,
             redirect:"follow"

           }).then((resp)=>resp.json())
           .then((result)=>{
            console.log("Response uPDATE data===>",result);
            navigate("/admin/user")
           }).catch((error)=> console.log("error",error))
           
      
      };
   const _getUserById=async()=>{
    let headersList = {
        "Content-Type": "application/json"
       }
       
       let response = await fetch(`http://localhost:5000/api/admin/user/${id}`, { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       console.log("api data",data);
        setUserData(data)
       
       
   }

    console.log("----->",userData)
    useEffect(() => {
       _getUserById()
    }, [])
  return (
    <section>
    <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
   <h1>UpdateUser</h1>
  
    <form onSubmit={handleSubmit}>
   

    <div>
    <label htmlFor='name'  style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>Name</label>
    <input type='text' value={userData.name} name='name'  onChange={handleInput} />
    </div>
    <div>
    <label htmlFor='phone' style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>Phone</label>
    <input type='phone'  name='phone' value={userData.phone}  onChange={handleInput}  id='phone' />
    </div>
    <div>
    <label htmlFor='email'style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>Email</label>
    <input type='email' name='email' value={userData.email}  onChange={handleInput} id='email'  placeholder="email" />
    </div>

    <div>
    <button type='submit'   style={{width:"200px",marginTop:"30px"}}>Update</button>
    </div>
    </form>
   </div>
  
    </section>
  )
}


