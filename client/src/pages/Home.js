import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home({ skills, setSkills }) {
  const [newSkill, setNewSkill] = useState({
    name: '',
    skill: '',
    description: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.name && newSkill.skill && newSkill.description) {
      const newSkillData = { ...newSkill, id: Date.now() }; // unique ID
      setSkills([...skills, newSkillData]);
      setNewSkill({ name: '', skill: '', description: '', email: '' });
    }
  };

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ textAlign: 'center', padding: '40px 20px' }}
    >
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '34px', color: '#4F46E5' }}>🎓 Welcome to SkillSnap</h1>
        <p style={{ fontSize: '20px', color: '#374151' }}>A platform to showcase your talents!</p>
      </div>

      <form
    onSubmit={handleAddSkill}
    style={{ marginBottom: 30, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <input
      type="text"
      placeholder="👤 Your Name"
      value={newSkill.name}
      onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
      style={{ width: '300px', padding: '15px', fontSize: '16px', marginBottom: '10px' }}
    />
    <input
      type="text"
      placeholder="💡 Your Skill"
      value={newSkill.skill}
      onChange={(e) => setNewSkill({ ...newSkill, skill: e.target.value })}
      style={{ width: '300px', padding: '15px', fontSize: '16px', marginBottom: '10px' }}
    />
    <input
      type="email"
      placeholder="📧 Your Email"
      value={newSkill.email}
      onChange={(e) => setNewSkill({ ...newSkill, email: e.target.value })}
      style={{ width: '300px', padding: '15px', fontSize: '16px', marginBottom: '10px' }}
    />

    <textarea
      placeholder="📝 Short Description"
      value={newSkill.description}
      onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
      style={{ width: '300px', padding: '17px', fontSize: '16px', marginBottom: '10px' }}
    />
    <button
      type="submit"
      style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '14px 28px',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
    >
      Add Skill
    </button>
  </form>

  {/* Skills Grid */}
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
    justifyContent: 'center',
    maxWidth: '900px',
    margin: '0 auto'
  }}>
    {skills.map((skill) => (
      <div key={skill.id} style={{
        backgroundColor: '#fff',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        padding: 23,
        borderRadius: 28,
        textAlign: 'center',
        maxWidth: '350px',
        margin: '0 auto'
      }}>
        <h3 style={{ color: '#1e3a8a' }}>👤 {skill.name}</h3>
        <strong>💡 {skill.skill}</strong>
        <p>📧 {skill.email}</p>
        <p>📝 {skill.description}</p>

        <button
          onClick={() => navigate(`/profile/${skill.id}`)}
          style={{
            backgroundColor: '#1e3a8a',
            color: 'white',
            border: 'none',
            borderRadius: 5,
            padding: '8px 12px',
            fontWeight: 'bold',
            marginRight: 10,
            cursor: 'pointer'
          }}
        >
          View Profile
        </button>

        <button
          onClick={() => handleDeleteSkill(skill.id)}
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: 5,
            padding: '8px 12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
</motion.div>

  );
}

export default Home;












