import React, { useEffect, useState } from 'react'
import  "./Service.css"
import { useAuth } from '../store/auth'

export const Service=() =>{
  const {service}=useAuth()
  const [services, setServices] = useState(service)
 

  return (
    <section>
    <div>
     <h1> Service</h1>
    </div>

    <div className='container col col-three' style={{}} >
    {
  <div className='grid-container'>
    {services.map((data, index) => {
      const {provider,price,service,description}=data
      return (
      <div key={index} className='main-card'>
        <div className='card-image'>
          <img src='../public/images/design.png' alt='Services page logo' width='300' />
        </div>
        <div className='price-col'>
          <h3>{provider}</h3>
          <h3>{price}</h3>
        </div>
        <h2>{service}</h2>
        <p>{description}</p>
      </div>
    )})}
  </div>
}


   
    </div>
    
    </section>
  )
}


