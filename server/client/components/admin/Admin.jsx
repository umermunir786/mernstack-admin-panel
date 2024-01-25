import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
function Admin() {
  return (
    <>
    <section>
        <div style={{display:"flex",marginBottom:"50px"}}>
        <div style={{width:"35%",border:"1px solid black",flex:1,padding:"40px",justifyContent:"flex-start",alignItems:"flex-start"}}>
<NavLink to={"/admin/user" } style={{display:"flex",justifyContent:"center",alignItems:"center"}}><FaUser /><p>Users</p></NavLink>
<NavLink to={"/admin/contacts"} style={{display:"flex",justifyContent:"center",alignItems:"center"}}><RiContactsBook2Fill /><p>Contacts</p></NavLink>
<NavLink to={"/admin/services"} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<MdMiscellaneousServices /><p>Services</p></NavLink>
        </div>
        <div style={{width:"65%",border:"1px solid black",padding:"40px"}}>
        <Outlet/>
        </div>
        </div>
    </section>
   
   </>
  )
}

export default Admin