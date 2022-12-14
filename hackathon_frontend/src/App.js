import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Organizer from "./Modules/Organizer";
import Customer from "./components/Customer";
import Login from "./components/LoginComponents/Login"
import Admin from "./components/Admin";
import ApplicationStatus from "./components/ApplicationStatus";
import LoginCustomer from "./components/LoginComponents/LoginCustomer"
import LoginAdmin from "./components/LoginComponents/LoginAdmin"
import Payment from "./components/Payment";
function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/organize" element={<Organizer />} />
          <Route path="/trending" element={<Home />} />
          <Route path="/categories" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/application" element={<ApplicationStatus/>} />
          <Route path="/logincustomer" element={<LoginCustomer/>} />
          <Route path="/loginadmin" element={<LoginAdmin/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
