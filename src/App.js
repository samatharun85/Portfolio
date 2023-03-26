import React from "react";
import "./App.css";
import Profile from "./components/home/Profile";
import { Email } from "./components/contact/Email";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Email />
    </div>
  );
};

export default App;
