import React from 'react';
import './blog.css';
import { Link } from 'react-scroll';

const Blog = () => {
    return (
        <section id="blog">
            <div className="blogcontent">
                <span className="hey">Hey,</span>
                <span className="blogtext">I'M <span className="blogname">SJ SHEEJA</span></span>
                <p className="blogpara">
                    A frontend-focused Web Developer building the frontend of <br />
                    Websites & Web Applications that lead to the success of overall projects.
                </p>
                
                
                <a href="#contact">
                    <button className="btn">
                        <img src={`${process.env.PUBLIC_URL}/images/hire.png`} alt="Hire Me" className="btnImg"/>Hire Me
                    </button>
                </a>
            </div>

            
            <img src={`${process.env.PUBLIC_URL}/images/sj-img.jpg`} alt="SJ Sheeja" className="bg" />
        </section>
    );
}

export default Blog;
