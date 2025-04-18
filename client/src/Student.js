import React from "react";
import "./App.css";

const students = [
  {
    name: "Sneha R.",
    title: "UI/UX Designer",
    description: "Passionate about clean and modern interfaces. Figma expert.",
  },
  {
    name: "Ravi Kumar",
    title: "Web Developer",
    description: "Frontend wizard with React and Tailwind. Loves animation.",
  },
  {
    name: "Arjun Patel",
    title: "Content Creator",
    description: "Writes engaging blogs, scripts, and manages social media.",
  },
];

const Students = () => {
  return (
    <div className="students-container">
      <h2>🎓 Our Talented Students</h2>

      <div className="card-grid">
        {students.map((student, index) => (
          <div className="student-card" key={index}>
            <h3>{student.name}</h3>
            <h4>{student.title}</h4>
            <p>{student.description}</p>
            <div className="btn-group">
              <button className="view-btn">View Profile</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
