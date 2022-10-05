import React from "react";
import { Routes, Route} from 'react-router-dom';

// Import the other components
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import CreateResume from "./components/CreateResume";
import SignOut from "./components/SignOut";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </div>
  )
}

export default App;
