import React from 'react';
import './education.css';

const Education = () => {
    const educationData = [
        {
            year: "2022 - 2026",
            degree: "Bachelor of Engineering (B.E)",
            institution: "Anna University, Computer Science",
            icon: `${process.env.PUBLIC_URL}/images/graduation.jpeg`
        },
        {
            year: "2020 - 2022",
            degree: "Higher Secondary Education",
            institution: "JMGH Secondary School",
            icon: `${process.env.PUBLIC_URL}/images/highschool.jpeg`
        },
        {
            year: "2019 - 2020",
            degree: "Matric school",
            institution: "Dhanam Matric School",
            icon: `${process.env.PUBLIC_URL}/images/school.jpeg`
        }
    ];

    return (
        <section id="education">
            <h2 className="section-title">Education</h2>
            <div className="education-container">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card">
                        <img src={edu.icon} alt="Education Icon" className="education-icon" />
                        <div className="education-info">
                            <h3 className="education-year">{edu.year}</h3>
                            <h4 className="education-degree">{edu.degree}</h4>
                            <p className="education-institution">{edu.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
