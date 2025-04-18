// src/pages/Explore.js
import React from 'react';
import './Explore.css'; 
import { Link } from 'react-router-dom';


function Explore({ skills }) {
  return (
    <div className="explore-container">
      <Link to="/" className="explore-back-button">⬅ Back to Home</Link>
      <h2 className="explore-title">
        <span role="img" aria-label="search" className="explore-icon">🔍</span> 
        <strong>Explore Talents</strong>
      </h2>

      {skills.length === 0 ? (
        <p className="explore-empty">🚀 No skills to display yet. Be the first to share yours!</p>
      ) : (
        <div className="explore-grid">
          {skills.map((skill) => {
            const initials = skill.name
              .split(' ')
              .map(word => word[0])
              .join('')
              .toUpperCase();

            return (
              <div key={skill.id} className="explore-card">
                <div className="explore-header">
                  <div className="explore-avatar">{initials}</div>
                  <h3 className="explore-name">{skill.name}</h3>
                </div>
                <p className="explore-field">
                  Skill: <span className="explore-value">{skill.skill}</span>
                </p>
                <p className="explore-description">{skill.description}</p>
                {skill.email && (
                  <p className="explore-email">📧 {skill.email}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Explore;




