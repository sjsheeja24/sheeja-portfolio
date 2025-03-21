import React from "react";


const skillsData = [
  { id: 1, name: "HTML", level: "50%" },
  { id: 2, name: "CSS", level: "60%" },
  { id: 3, name: "JavaScript", level: "30%" },
  { id: 4, name: "React.js", level: "30%" },
];

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill) => (
          <div className="skill-box" key={skill.id}>
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;