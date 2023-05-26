import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import Products from './Component/Products';
import ProductDetail from './Component/ProductDetail';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute';
import Login from './Component/Login';

export const Wrapper = createContext()

function App() {

  const [search , setSearch] = useState("");
  const[islogin , setIslogin] = useState(false);



  return (
    <>
      <Wrapper.Provider value={{setSearch , search , islogin , setIslogin}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Products' element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path='/Products/:id' element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Wrapper.Provider>
    </>
  );
}

export default App;
