import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";



export const Login=()=> {
     const {storeTokenLS}=useAuth()
    const [user, setUser] = useState({
       
        email:"",
      
        password:""
    })
    const navigate = useNavigate();
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      // handle form on submit
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user);
          
        let headersList = {
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({

            "email":user.email,
           "password":user.password,
        
           });
           console.log(bodyContent)
            fetch("http://localhost:5000/api/auth/login", { 
             method: "POST",
             body: bodyContent,
             headers: headersList,
             redirect:"follow"

           }).then((resp)=>resp.json())
           .then((result)=>{
            if(result?.message=="Login Successfully"){
                toast.success("login successfully")
               storeTokenLS(result?.token)
                  navigate("/")  
             
            }
            else{
              toast.error("Invalid credential")
            }
            console.log("Response data ==>",result);
           }).catch((error)=> console.log("error",error))
      };
  
return(
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
)
}