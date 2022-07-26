
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import {Container } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Footer from './Components/Footer';
import { useState } from 'react';
import LandingPage from './Components/landingpage';
import DonorHome from './Components/DonorHome';
import CollectionCenter from './Components/CollectionCenter';
import HospitalView from './Components/hospitalView';
function App() {
 
  return (
    <BrowserRouter>
         
          
    <Routes>
    <Route path='/'exact element={ <LandingPage/ >}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/SignUp' element={<Footer/>}/>
     <Route path='/Logout' element={<LandingPage/>}/>
     <Route path='/DonorHome' element={<DonorHome/>}/>
     <Route path='/Collection' element={<CollectionCenter/>}/>
     <Route path='/Hospital' element={<HospitalView/>}/>
    </Routes>
    
    
    
    </BrowserRouter>
   
  );
}

export default App;
/*<BrowserRouter>
         
          
<Routes>
<Route path='/'exact element={ <LandingPage/ >}/>
 <Route path='/Login' element={<Login/>}/>
 <Route path='/SignUp' element={<Footer/>}/>
 <Route path='/Logout' element={<LandingPage/>}/>
 <Route path='/DonorHome' element={<DonorHome/>}/>
</Routes>



</BrowserRouter> */