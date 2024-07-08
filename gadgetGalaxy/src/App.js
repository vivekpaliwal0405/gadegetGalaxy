import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layouts/Layout";
import Home from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";

// import { BackgroundBeams } from "./Components/BackgroundBerams";

import Login from "./Components/registration/Login";

import { Contact } from './Components/Pages/Contact';
import ProductPage from './Components/Pages/ProductPage';
import AdminLogin from './Admin/pages/AdminLogin';
import AdminDashboard from './Admin/pages/AdminDashboard';
import AddProduct from './Admin/pages/AddProduct';
import { SignUp } from './Components/registration/SignUp';
import CoustomerQuery from './Admin/pages/CoustomerQuery';
import ViewProduct from './Admin/pages/ViewProduct';
import UpdateProduct from './Admin/pages/UpdateProduct';
import AddCategory from "./Admin/pages/AddCategory";
import Cart from "./Components/Pages/Cart";
import Singleproduct from "./Components/Pages/Singleproduct";
import Discount from "./Components/Pages/Discount";
import CoustomerOrderPage from "./Admin/pages/CoustomerOrderPage";






function App() {
  return (
   <>
    
   <BrowserRouter>
   {/* <BackgroundBeams classname='bg-black h-screen'/> */}
    <Routes>
    <Route path="/Adminlogin" element={<AdminLogin />} /> 
    <Route path="/Admindashboard" element={<AdminDashboard />} /> 
    <Route path="/Addproduct" element={<AddProduct />} /> 
    <Route path="/Coustomerquery" element={<CoustomerQuery />} /> 
    <Route path="/Viewproduct" element={<ViewProduct />} /> 
    <Route path="/Updateproduct/:id" element={<UpdateProduct />} /> 
    <Route path="/Addcategory" element={<AddCategory />} /> 
    <Route path="/CoustomerOrderPage" element={<CoustomerOrderPage />} /> 
  
    <Route path="/SignUp" element={<SignUp />} /> 
    <Route path="/Login" element={<Login />} /> 
    
    
    <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} /> 
    <Route path="/About" element={<About />} /> 
    <Route path="/Contact" element={<Contact />} /> 
    <Route path="/Product" element={<ProductPage />} /> 
    <Route path="/Cart" element={<Cart />} /> 
    <Route path="/Discount" element={<Discount/>} /> 
    <Route path="/Singleproduct/:id" element={<Singleproduct/>} /> 




    </Route>
    </Routes>
   </BrowserRouter> 

  
   </>
  );
}

export default App;
