import { Button } from "react-bootstrap";
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
import { EmailVerification } from "./pages/email-verification/EmailVerification";

function App() {
  return (
    <div>
    <Router>
        <Switch>
          <Route path ="/registration" children= { <Register/>}/> 
          <Route path ="/dashboard" children= { <Dashboard/>}/> 
          <Route path ="/email-verification" children= { <EmailVerification/>}/> 
          <Route exact path ="/" children= { <Login/>}/> 
          <Route  path ="*" children= { <PageNotFound/>}/> 
    </Switch>
    </Router>
  
     
    </div>
  );
}

export default App;
