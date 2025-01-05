import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Custom styles for login
import Container from "@mui/material/Container";
import Id from './Id';
import Signup from "./signup/Signup";
import Home from "./Home"; // Import the Home component
import PillReminder from "./Pillreminder"; // Import the PillReminder component
import AddPill from "./Addpill"; // Import the AddPill component
import Pharmacy from "./Pharmacy"; // Import the Pharmacy component
import Doctor from "./Doctor"; // Import the Doctor component
import Nurse from "./Nurse"; // Import the Nurse component
import Food from "./Food";
import Login from "./login/Login";
import Notification from "./Notification";
import Cart from "./Shop";

function App() {
  return (
    <Container className="app-container" maxWidth="sm">
      <Router>
        <Routes>

         <Route path="/id" element={<Id />} />

         
          {/* Route for the Login page */}

          {/* Route for the Signup page */}
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

          {/* Route for the Signup page */}
          <Route path="/signup" element={<Signup />} />

          {/* Route for the Home page */}
          <Route path="/home" element={<Home />} />

          <Route path="/notification" element={<Notification />} />

          <Route path="/food" element={<Food />} />

          {/* Route for the PillReminder page */}
          <Route path="/pill-reminder" element={<PillReminder />} />

          {/* Route for the AddPill page */}
          <Route path="/add-pill" element={<AddPill />} />

          {/* Route for the Pharmacy page */}
          <Route path="/pharmacy" element={<Pharmacy />} />

          {/* Route for the Doctor page */}
          <Route path="/doctor" element={<Doctor />} />

          {/* Route for the Nurse page */}
          <Route path="/nurse" element={<Nurse />} />


        </Routes>
      </Router>
    </Container>
  );
}

export default App;
