import React, { useEffect, useState } from 'react'

function Contacts() {
  const [contacts, setContacts] = useState([])
  const [update, setUpdate] = useState(false)
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
  const _DelContactById=async(id)=>{
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
     }
     
     let response = await fetch(`http://localhost:5000/api/admin/contact/delete/${id}`, { 
       method: "DELETE",
       headers: headersList
     }).then(res=>res.json())
     .then((data)=>{
      console.log(data)
      setUpdate(!update)
    }).catch((err)=>{console.log(err)})
     
     let data = await response.json();
     console.log(data);


     
  }
    useEffect(() => {
     _get()
       }, [update])
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
  <td><button onClick={()=>{_DelContactById(_id)}} >delete</button></td>
  
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