import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillTitledes">
                I have a strong foundation in HTML, CSS, and JavaScript, with proficiency in React.js for building responsive and interactive web applications. 
                I am familiar with Git and GitHub for version control and use VS Code as my primary development environment. 
                I am continuously learning and expanding my knowledge to improve my web development skills.
            </span>
            <div className="skillbars">
                <div className="skillbar">
                    <img src={`${process.env.PUBLIC_URL}/images/webpage.avif`} alt="webpage" className="skillimg" />
                    <div className="skillbartext">
                        <h2>Frontend web developer</h2>
                        <p>Focuses on layout, animations, navigation</p>
                        <p>programming languages: HTML,     CSS,    javascript,     React js</p>
                    </div>
                </div>
            </div>

            <div className="skillbars">
                {/* Skill Progress Bars with Logos */}
                <div className="progressbar">
                    <p><img src={`${process.env.PUBLIC_URL}/images/html.png`} alt="HTML" className="skill-logo" /> HTML</p>
                    <div className="progress">
                        <div className="progress-fill html">90%</div>
                    </div>
                </div>

                <div className="progressbar">
                    <p><img src={`${process.env.PUBLIC_URL}/images/css.png`} alt="CSS" className="skill-logo" /> CSS</p>
                    <div className="progress">
                        <div className="progress-fill css">85%</div>
                    </div>
                </div>

                <div className="progressbar">
                    <p><img src={`${process.env.PUBLIC_URL}/images/js.png`} alt="JavaScript" className="skill-logo" /> JavaScript</p>
                    <div className="progress">
                        <div className="progress-fill js">75%</div>
                    </div>
                </div>

                <div className="progressbar">
                    <p><img src={`${process.env.PUBLIC_URL}/images/reactjs.png`} alt="React" className="skill-logo" /> React.js</p>
                    <div className="progress">
                        <div className="progress-fill react">80%</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
