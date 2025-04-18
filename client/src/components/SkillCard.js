import React from "react";
import { useNavigate } from "react-router-dom";
import "./SkillCard.css"; // optional

const SkillCard = ({ id, name, skill, description, handleDeleteSkill }) => {
  const navigate = useNavigate();

  const initials = name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="card">
      <div className="avatar">{initials}</div>
      <h3>{name}</h3>
      <p className="skill">{skill}</p>
      <p className="desc">{description}</p>
      <div className="buttons">
        <button className="view" onClick={() => navigate(`/profile/${id}`)}>View Profile</button>
        <button className="delete" onClick={() => handleDeleteSkill(id)}>Delete</button>
      </div>
    </div>
  );
};

export default SkillCard;


