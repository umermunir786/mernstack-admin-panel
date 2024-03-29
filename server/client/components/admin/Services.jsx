import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const [services, setServices] = useState([]);
  const [update, setUpdate] = useState(false)
  const _get = async () => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let response = await fetch("http://localhost:5000/api/admin/services", {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    console.log("data services", data);
    setServices(data);
  };

  const _DelServicesById=async(id)=>{
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
     }
     
     let response = await fetch(`http://localhost:5000/api/admin/services/delete/${id}`, { 
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
    _get();
  }, [update]);

  return (
    <section>
      <div>
        <h1>Admin Services</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "20px 0px 20px 0px" }}>
        <table>
          <thead>
            <tr>
              <td>service</td>
              <td>provider</td>
              <td>price</td>
              <td>description</td>
              <td>update</td>
              <td>delete</td>
            </tr>
          </thead>
          <tbody>
            {services.map((data, index) => {
              const { _id, service, provider, price, description } = data; // Assuming id is the unique identifier
              return (
                <tr key={index}>
                  <td>{service}</td>
                  <td>{provider}</td>
                  <td>{price}</td>
                  <td>{description}</td>
                  <td>
                    <Link to={`/admin/services/${_id}`}>edit</Link>
                  </td>
                  <td>
                    <button onClick={()=>{_DelServicesById(_id)}}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Services;
