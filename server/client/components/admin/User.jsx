import React, { useEffect, useState } from 'react'
 import {Link, useNavigate} from 'react-router-dom'

function User() {
const userToken=localStorage.getItem("token")
const [users, setUsers] = useState([])
const [update, setUpdate] = useState(false)
const navigate=useNavigate()
const _get=async()=>{
  let headersList = {
    "Content-Type": "application/json",
    "Authorization": `Bearer  ${userToken}`
   }
   
   let response = await fetch("http://localhost:5000/api/admin/users", { 
     method: "GET",
     headers: headersList
   });
   
   let data = await response.json();
   console.log("data",data);
   setUsers(data)
}

const DeleteUserById= async(id)=>{
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`, { 
     method: "DELETE",
     headers: headersList
   });
   
   let data = await response.json();
   console.log("delete user response",data);
   setUpdate(!update)
   
}
  useEffect(() => {
   _get()
     
  
  }, [update])
  return (
    <section>
    <div>
      <h1>Admin Users</h1>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 0px 20px 0px"}}>
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>phone</td>
          <td>email</td>
          <td>admin</td>
          <td>update</td>
          <td>delete</td>
        </tr>
      </thead>
      <tbody>
      {
        users.map((data,index)=>{
          const {name,isAdmin,phone,email,_id}=data
          return(
          <tr key={index}>
  <td>{name}</td>
  <td>{phone}</td>
  <td>{email}</td>
  <td>{`${isAdmin==true ? "true":"false"}`}</td>
  <td><Link  
    to={`/admin/users/${_id}/edit`}
>edit</Link></td>
  <td><button  onClick={()=>{
    DeleteUserById(_id)
  }}>delete</button></td>
</tr>
        )})
      }

      </tbody>
    </table>
    </div>
    </section>
  )
  }

export default User