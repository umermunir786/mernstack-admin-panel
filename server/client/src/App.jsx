
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { About } from '../components/About'
import { Register } from '../components/Register'
import { Service } from '../components/Service'
import { Navbar } from '../components/Navbar'
import { Login } from '../components/Login'
import { Error } from '../components/Error'
import { Logout } from '../components/Logout'
import Footer from '../components/Footer'
import Contacts from '../components/admin/Contacts'
import User from '../components/admin/User'
import Services from '../components/admin/Services'
import Admin from '../components/admin/Admin'
import { UpdateServices } from '../components/admin/UpdateServices'
import { UpdateUser } from '../components/admin/UpdateUser'



function App() {


  return (
    <Router >
    <Navbar/>
    <Routes >
     <Route  path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/service' element={<Service/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/Logout' element={<Logout/>}/>
     <Route path='*' element={<Error/>}/>
     <Route path='/admin' element={<Admin/>}>
     <Route path='contacts' element={<Contacts/>}/>
     <Route path='user' element={<User/>}/>
     <Route path='services' element={<Services/>}/>
     </Route>
     <Route path='/admin/users/:id/edit' element={<UpdateUser/>}/>
     <Route path='/admin/services/:id' element={<UpdateServices/>}/>
    
   
      </Routes>
     <Footer/>
    </Router>
  )
}

export default App
