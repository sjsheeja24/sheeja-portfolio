import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function Blog() {
 const navigate = useNavigate();
  return (
  
    <div>
      <nav className="navbar">
        <div className="logo">SJ Sheeja</div>
        <ul className="menu">
          <li className="menu-item"><button onClick={() => navigate("/blog")}>Home</button></li>
          <li className="menu-item"><button onClick={() => navigate("/education")}>Education</button></li>
          <li className="menu-item"><button onClick={() => navigate("/skills")}>Skill</button></li>
          <li className="menu-item"><button onClick={() => navigate("/contact")}>Contact</button></li>
        </ul>
      </nav>
      
      <div className="background">
        <div className="header">
          <h5>Hey, I'M</h5>
          <h1>SJ SHEEJA</h1>
          <p>A frontend-focused Web Developer building the frontend of<br/> Websites & Web Applications that lead to the success of overall projects.</p>
          <img src={`${process.env.PUBLIC_URL}/images/sj-img.jpg`} alt="SJ Sheeja" width="500" height="500"/>
        </div>
      </div>
    </div>
  );
}


export default Blog;