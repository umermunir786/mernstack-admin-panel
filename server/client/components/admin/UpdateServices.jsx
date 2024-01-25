import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateServices = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  // const id="65a77ef6393c26434dd12a08"
  console.log("=====>service id",id)
  const [serviceData, setServiceData] = useState({
    service: "",
    provider: "",
    price: "",
    description: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setServiceData({
      ...serviceData,
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
        service: serviceData.service,
        provider: serviceData.provider,
        price: serviceData.price,
        description: serviceData.description,
       });
       console.log(bodyContent)
        fetch(`http://localhost:5000/api/admin/services/update/${id}`, { 
         method: "PATCH",
         body: bodyContent,
         headers: headersList,
         redirect:"follow"

       }).then((resp)=>resp.json())
       .then((result)=>{
        console.log("Response uPDATE data===>",result);
        alert("submit")
        navigate("/admin/services")
       }).catch((error)=> console.log("error",error))
       
  
  };
  const _getServicesById = async () => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let response = await fetch(`http://localhost:5000/api/admin/services/${id}`, {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    console.log("api data", data);
    setServiceData(data);
  };

  useEffect(() => {
    _getServicesById();
  }, []);

  const inputStyle = {
    marginLeft: "5px",
    marginBottom: "15px",
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  return (
    <section style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Update Services</h1>
        <form
          onSubmit={
            handleSubmit
            }
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <label htmlFor="service">Service</label>
            <input
              type="text"
              value={serviceData.service}
              name="service"
              placeholder="service"
              onChange={handleInput}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="provider">Provider</label>
            <input
              type="text"
              name="provider"
              value={serviceData.provider}
              onChange={handleInput}
              placeholder="provider"
              id="provider"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={serviceData.price}
              onChange={handleInput}
              id="price"
              placeholder="Price"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="descrption">Description</label>
            <input
              type="text"
              name="description"
              value={serviceData.description}
              onChange={handleInput}
              id="description"
              placeholder="description"
              style={inputStyle}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
