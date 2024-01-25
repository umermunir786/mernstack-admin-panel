import React, { useEffect, useState } from 'react'

function Contacts() {
  const [contacts, setContacts] = useState([])
  const _get=async()=>{
    let headersList = {
      "Content-Type": "application/json",
      // "Authorization": `Bearer  ${userToken}`
     }
     
     let response = await fetch("http://localhost:5000/api/admin/contacts", { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.json();
     console.log("data contacts",data);
     setContacts(data)
  }
    useEffect(() => {
     _get()
       
    
    }, [])
  return (
    <section>
    <div>
      <h1>Admin Contacts</h1>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"20px 0px 20px 0px"}}>
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>email</td>
          <td>id</td>
          <td>message</td>
          {/* <td>update</td> */}
  <td>delete</td>
        </tr>
      </thead>
      <tbody>
      {
        contacts.map((data,index)=>{
          const {name,email,_id,message}=data
          return(
          <tr key={index}>
  <td>{name}</td>
  <td>{email}</td>
  <td>{_id}</td>
  <td>{message}</td>
  {/* <td><button >update</button></td> */}
  <td><button >delete</button></td>
  
</tr>
        )})
      }

      </tbody>
    </table>
    </div>
    </section>
  )
}

export default Contacts