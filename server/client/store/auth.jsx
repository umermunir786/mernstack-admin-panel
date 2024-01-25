import {createContext,useContext, useEffect, useState} from 'react'

export const authContext=createContext()


export const AuthProvider=({children})=>{
 
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState()
    const [service, setServices] = useState([])
    const storeTokenLS=(token)=>{
        return localStorage.setItem("token",token)
    }

    const LogoutUser=()=>{
        setToken("")
     return   localStorage.removeItem('token')

    }
    const UserData=async()=>{
        let headersList = {
            "Accept": "*/*",
           
            "Authorization": `Bearer ${localStorage.getItem("token")}`
           }
           
           let response = await fetch("http://localhost:5000/api/auth/user", { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.json();
           console.log(data);
           setUser(data.userData)
           

    }

    const _getServices=()=>{
  
        const requestOptions={
          method:"GET",
          redirect:"follow",
          headers:{Accept:"application/json"}
        }
            fetch(`http://localhost:5000/api/service`,requestOptions)
            .then((res)=>res.json()).then((data)=>{
              console.log(data)
          setServices(data)
          }).catch(err=>console.log(err))
         
          }
useEffect(() => {
   UserData()
   _getServices()
}, [])
    return(
        <authContext.Provider value={{storeTokenLS,LogoutUser,user,service}}>
             {children}
            </authContext.Provider>
    )

}

export const useAuth=()=>{


    const authContextValue=useContext(authContext)
    if (!authContextValue) {
      throw new Error("Use Auth use outside the provider")
        
    }

    return  authContextValue
}

