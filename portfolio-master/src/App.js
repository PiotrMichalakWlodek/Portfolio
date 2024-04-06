import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import SingleProject from "./components/Projects/SingleProject";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    console.log(openModal)
  return (
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        {openModal.state &&
            <SingleProject openModal={openModal} setOpenModal={setOpenModal} />
        }
        <Contact />
        <Footer/>
      </Router>
  );
}

export default App;
