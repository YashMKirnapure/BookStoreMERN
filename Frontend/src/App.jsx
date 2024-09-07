import React from "react";
import Home from "../src/Home/Home.jsx";
import Courses from "./courses/Courses.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup.jsx";

const App = () => {
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>

    </div>
    </>
  );
};

export default App;
