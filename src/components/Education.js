import React from "react";

const educationData = [
  {
    id: 1,
        institution: " 📍 ACET college",
        degree: " 🎓 Bachelor of Engineering in Computer Science and Engineering",
        duration: "2022 - 2026",
  },
];

function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu) => (
          <div className="education-box" key={edu.id}>
            <h3>{edu.degree}</h3>
            <div className="ed1">
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;