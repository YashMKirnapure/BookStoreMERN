import React from "react";
import Home from "../src/Home/Home.jsx";
import Courses from "./courses/Courses.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import {Toaster} from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider.jsx";

const App = () => {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/course" element={<Courses/>}/> */}
      <Route path="/course" element={authUser?<Courses/> : <Navigate to="/signup"/>}/>  
      {/* agar user authentic hai toh use Courses ka section dikhao else agar new user hai then direct them to signup section. */}

      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster/>

    </div>
    </>
  );
};

export default App;
