import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import Cart from './Cart/Cart';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import Exploremenu from './exploremenu/exploremenu';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Login from './components/LoginPopup/Login';

function App() {

  let[login,setLogin]=useState(false);
  return (
    <>

    {login?<Login setLogin={setLogin}/>:<></>}
    
      <div className="App">
      <Navbar setLogin={setLogin}/>
      
      <Routes>
        < Route path='/' element={<Home/>} />
        
        < Route path='/cart' element={<Cart/>} />
        < Route path='/order' element={<PlaceOrder/>} />
      </Routes>

    
    </div>
    
    <Footer/>
    </>
    
  );
}

export default App;
