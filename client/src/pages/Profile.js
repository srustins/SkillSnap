import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Profile({ skills, setSkills }) {
  const { id } = useParams();
  const skill = skills.find(s => s.id.toString() === id);

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: skill?.name || '',
    skill: skill?.skill || '',
    description: skill?.description || '',
    email: skill?.email || ''
  });

  if (!skill) {
    return <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Profile not found</h2>;
  }

  const handleSave = () => {
    const updatedSkills = skills.map(s =>
      s.id.toString() === id ? { ...s, ...editedData } : s
    );
    setSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
    setIsEditing(false);
  };

  return (
    <div style={{
      backgroundColor: '#cbd5e1',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(editedData.name)}`}
          alt="Profile Avatar"
          style={{
            borderRadius: '50%',
            marginBottom: '20px',
            border: '4px solid #1e3a8a',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            width: '120px',
            height: '120px'
          }}
        />

        {isEditing ? (
          <>
            <input
              type="text"
              value={editedData.name}
              onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
              style={inputStyle}
              placeholder="Name"
            />
            <input
              type="text"
              value={editedData.skill}
              onChange={(e) => setEditedData({ ...editedData, skill: e.target.value })}
              style={inputStyle}
              placeholder="Skill"
            />
            <input
              type="email"
              value={editedData.email}
              onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
              style={inputStyle}
              placeholder="Email"
            />
            <textarea
              value={editedData.description}
              onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
              style={{ ...inputStyle, height: '80px' }}
              placeholder="Description"
            />
            <button onClick={handleSave} style={buttonStyle}>💾 Save</button>
          </>
        ) : (
          <>
            <h2 style={{ color: '#1e3a8a', marginBottom: '10px' }}>{skill.name}'s Profile</h2>
            <p style={{ fontSize: '18px' }}><strong>💡 Skill:</strong> {skill.skill}</p>
            <p style={{ fontSize: '17px', marginTop: '10px' }}><strong>📝 Description:</strong> {skill.description}</p>
            <p style={{ fontSize: '16px', marginTop: '10px' }}>
              📧 <strong>Email:</strong> {skill.email}
            </p>
            <button onClick={() => setIsEditing(true)} style={buttonStyle}>✏️ Edit</button>
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '90%',
  padding: '10px',
  margin: '10px auto',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  display: 'block'
};

const buttonStyle = {
  marginTop: '15px',
  backgroundColor: '#1e3a8a',
  color: 'white',
  border: 'none',
  padding: '10px 18px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold'
};

export default Profile;



