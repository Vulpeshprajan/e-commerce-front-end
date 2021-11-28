
import './App.css';
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import {PageNotFound  } from "./components/page-not-found/404PageNotFound";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import EmailVerification  from "./pages/email-verification/EmailVerification";
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Order from './pages/order/Order';
import Customer from './pages/customer/Customer';
import Payment from './pages/payment/Payment';

function App() {
  return (
    <div>
    <Router>
        <Switch>
        <Route path ="/dashboard" children= { <Dashboard/>}/> 
        <Route path ="/categories" children= { <Category/>}/> 
        <Route path ="/products" children= { <Product/>}/> 
        <Route path ="/orders" children= { <Order/>}/> 
        <Route path ="/customers" children= { <Customer/>}/> 
        <Route path ="/payments" children= { <Payment/>}/> 

          <Route path ="/registration" children= { <Register/>}/> 
        
          <Route path ="/email-verification" children= { <EmailVerification/>}/> 
          <Route exact path ="/" children= { <Login/>}/> 
          <Route  path ="*" children= { <PageNotFound/>}/> 
    </Switch>
    </Router>
  
     
    </div>
  );
}

export default App;
