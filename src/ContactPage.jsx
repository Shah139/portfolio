import React, { useState } from 'react';
import Header from './Header.jsx';

const contacts = [
  {
    name: 'Facebook',
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#1877F3"/><path d="M21.333 16H18.667V25.333H15.333V16H13.333V13.333H15.333V11.733C15.333 9.86667 16.2 8.66667 18.467 8.66667H21.067V11.333H19.733C19.066 11.333 18.667 11.733 18.667 12.267V13.333H21.067L20.667 16Z" fill="white"/></svg>
    ),
    link: 'https://www.facebook.com/shahnawaz.shohag.2025/',
    display: 'facebook.com/shahnawaz.shohag.2025',
    label: 'Facebook',
  },
  {
    name: 'WhatsApp',
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#25D366"/><path d="M16 8C11.582 8 8 11.582 8 16C8 17.385 8.417 18.693 9.167 19.8L8 24L12.2 22.833C13.307 23.583 14.615 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8ZM16 22C14.885 22 13.807 21.693 12.867 21.133L12.6 20.967L10.4 21.6L11.033 19.4L10.867 19.133C10.307 18.193 10 17.115 10 16C10 12.691 12.691 10 16 10C19.309 10 22 12.691 22 16C22 19.309 19.309 22 16 22ZM18.6 17.267C18.4 17.2 17.6 16.8 17.4 16.733C17.2 16.667 17.067 16.633 16.933 16.867C16.8 17.1 16.267 17.8 16.133 17.933C16 18.067 15.867 18.067 15.667 18C15.467 17.933 14.8 17.7 14.067 17.067C13.333 16.433 13.067 15.8 13 15.6C12.933 15.4 13.067 15.267 13.133 15.2C13.2 15.133 13.333 14.933 13.4 14.8C13.467 14.667 13.467 14.6 13.533 14.467C13.6 14.333 13.6 14.2 13.533 14.067C13.467 13.933 13.067 12.933 12.933 12.667C12.8 12.4 12.667 12.4 12.533 12.4C12.4 12.4 12.267 12.4 12.133 12.4C12 12.4 11.867 12.4 11.8 12.533C11.733 12.667 11.333 13.067 11.333 14.133C11.333 15.2 12.067 16.267 12.267 16.533C12.467 16.8 13.733 18.267 15.267 18.8C15.733 18.933 16.067 19 16.267 19C16.467 19 16.667 19 16.8 18.933C16.933 18.867 17.6 18.467 17.8 18.267C18 18.067 18.8 17.333 18.867 17.2C18.933 17.067 18.8 17.333 18.6 17.267Z" fill="white"/></svg>
    ),
    link: 'https://wa.me/8801846188130',
    display: '+8801846188130',
    label: 'WhatsApp',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#0A66C2"/><path d="M12.667 13.333H10V22H12.667V13.333ZM11.333 12.267C12.133 12.267 12.667 11.733 12.667 11.067C12.667 10.4 12.133 9.86667 11.333 9.86667C10.533 9.86667 10 10.4 10 11.067C10 11.733 10.533 12.267 11.333 12.267ZM22 17.333V22H19.333V17.667C19.333 16.8 19.333 15.733 18.133 15.733C16.933 15.733 16.8 16.667 16.8 17.6V22H14.133V13.333H16.667V14.267H16.7C17.067 13.6 17.933 13.067 19.067 13.067C21.067 13.067 22 14.267 22 16.267V17.333Z" fill="white"/></svg>
    ),
    link: 'https://www.linkedin.com/in/shahneous-ali-0b3a53349/',
    display: 'linkedin.com/in/shahneous-ali-0b3a53349',
    label: 'LinkedIn',
  },
  {
    name: 'Gmail',
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#EA4335"/><path d="M23.333 10.667V21.333C23.333 22.067 22.733 22.667 22 22.667H10C9.26667 22.667 8.66667 22.067 8.66667 21.333V10.667C8.66667 9.93333 9.26667 9.33333 10 9.33333H22C22.733 9.33333 23.333 9.93333 23.333 10.667ZM16 16.9333L22 12.6667V11.3333L16 15.6L10 11.3333V12.6667L16 16.9333Z" fill="white"/></svg>
    ),
    link: 'mailto:snasohag9@gmail.com',
    display: 'snasohag9@gmail.com',
    label: 'Gmail',
  },
];

function ContactCard({ icon, display, label, link }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  function handleMouseEnter() {
    setHovered(true);
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '100%',
        maxWidth: 340,
        minHeight: 320,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '1.2rem',
        boxShadow: '0 2px 24px #0001',
        border: '1.5px solid #ececec',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.5rem',
        textDecoration: 'none',
        color: '#222',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, border 0.3s',
      }}
      className="contact-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>{icon}</div>
        <span style={{ fontWeight: 800, fontSize: '1.3rem', color: '#222', textAlign: 'center', wordBreak: 'break-all' }}>{display}</span>
      </div>
      <span style={{ color: '#888', fontSize: '1.08rem', textAlign: 'center' }}>{label}</span>
      <span
        className="contact-card-fade"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s',
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, #b3b3ff55 0%, #ffb3ec44 40%, #fff0 80%)`,
          zIndex: 1,
        }}
      ></span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#faf8f6', padding: 0, margin: 0 }}>
      <Header />
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '4rem 1rem 2rem 1rem' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#222', marginBottom: '2.5rem', textAlign: 'center' }}>
          Let's connect! So far you've seen my work, now contact me!
        </h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          justifyItems: 'center',
        }}>
          {contacts.map((c, i) => (
            <ContactCard key={c.name} {...c} />
          ))}
        </div>
      </div>
      <style>{`
        .contact-card:hover {
          box-shadow: 0 8px 32px #b3b3ff33, 0 2px 24px #0002;
          border: 1.5px solid #b3b3ff88;
        }
      `}</style>
    </div>
  );
} 