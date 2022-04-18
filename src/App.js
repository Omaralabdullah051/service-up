import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import Info from './Pages/Info/Info'
import React, { useState } from 'react';

function App() {

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  return (
    <div>
      <Header userInfo={userInfo}></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/info' element={<Info />} />
        <Route path='/signup' element={<Register userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
