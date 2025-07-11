import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profileImg from './assets/images/pfp.png'
import laptopImg from './assets/images/laptop.jpg'
import './App.css'
import Header from './Header.jsx'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section" style={{ width: '100%', background: '#faf8f6', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem 2rem 1rem' }}>
          <img src={profileImg} alt="Profile" style={{ width: 120, height: 120, borderRadius: '50%', border: '4px solid #fff', boxShadow: '0 2px 16px #0001', objectFit: 'cover', marginBottom: '1.5rem' }} />
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ background: '#ffe5e0', color: '#ff5722', padding: '0.2rem 0.8rem', borderRadius: '0.7rem', fontWeight: 600, fontSize: '1rem', marginRight: '0.7rem' }}>Hey!</span>
            <span style={{ fontWeight: 500, fontSize: '1.1rem', color: '#222' }}>I'm Shahneous Ali</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', margin: 0, marginBottom: '1rem', lineHeight: 1.1, color: '#222' }}>
            I Engineer Ideas Into Reality
          </h1>
          <p style={{ color: '#555', fontSize: '1.1rem', maxWidth: 500, textAlign: 'center', marginBottom: '2rem' }}>
            Turning ideas into scalable, robust applications that deliver real value. From concept to code, I make technology work flawlessly.
          </p>
          <Link to="/projects" style={{ background: '#222', color: '#fff', padding: '0.7rem 1.7rem', borderRadius: '1.2rem', fontSize: '1.1rem', fontWeight: 600, border: 'none', boxShadow: '0 2px 8px #0002', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
            Projects &gt;
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section" style={{ width: '100%', background: '#fff', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 1100, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem', boxSizing: 'border-box' }}>
          <div className="about-section-img" style={{ flex: '1 1 320px', maxWidth: 400, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 2rem 2rem 0' }}>
            <img src={laptopImg} alt="Laptop" style={{ width: '100%', maxWidth: 340, borderRadius: '1.2rem', boxShadow: '0 2px 16px #0001', background: '#faf8f6', objectFit: 'cover' }} />
          </div>
          <div className="about-section-content" style={{ flex: '2 1 320px', maxWidth: 500, minWidth: 260, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', margin: '0 0 2rem 2rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#222', marginBottom: '0.5rem', textAlign: 'left' }}>A Bit About Me</h2>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ff5722', margin: 0, marginBottom: '1rem', textAlign: 'left' }}>(& My Code)</h3>
            <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6, textAlign: 'left' }}>
              I am a full-stack developer who began my journey in game development, creating two fully functional 2D games with Unity that were not just experimental but fully playable. As my passion for building grew, I transitioned into app development, starting with Kotlin and eventually finding my stride with Flutter.<br /><br />
              Along the way, I strengthened my foundations in problem-solving by completing 150 top LeetCode questions and diving deep into data structures, algorithms, and object-oriented programming. This sharpened my ability to approach complex challenges with clean, efficient solutions.<br /><br />
              Since then, I have developed a wide range of applications: PokéKanto (a Pokédex-inspired app), a restaurant management system, smart to-do lists, sticky notes, work planner and tracker app, a social media platform, an age-time calculator, and a car service cost tracker. Each project introduced me to new tools, libraries, and design patterns, fueling my drive to tackle even more sophisticated challenges.<br /><br />
              Currently, I am working as a software developer at an IT firm where I am mastering real-world workflows, collaborating within teams, and building scalable products that are robust under pressure.<br /><br />
              Complex problems excite me. I enjoy transforming chaos into clean, functional solutions fueled by coffee and a relentless curiosity for growth.
            </p>
            <Link to="/contact" style={{ background: '#222', color: '#fff', padding: '0.7rem 1.7rem', borderRadius: '1.2rem', fontSize: '1.1rem', fontWeight: 600, border: 'none', boxShadow: '0 2px 8px #0002', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
              Contact &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section" style={{ width: '100%', background: '#faf8f6', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 900, padding: '4rem 1rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#222', marginBottom: '2.5rem', textAlign: 'center' }}>My Skills & Stack</h2>
          <div style={{ width: '100%', background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 16px #0001', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.1rem' }}>
              <thead>
                <tr style={{ background: '#faf8f6', color: '#222', fontWeight: 700 }}>
                  <th style={{ textAlign: 'left', padding: '1rem 1.2rem', fontWeight: 700, fontSize: '1.1rem' }}>Category</th>
                  <th style={{ textAlign: 'left', padding: '1rem 1.2rem', fontWeight: 700, fontSize: '1.1rem' }}>Tools & Tech</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Languages</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>C, C++, C#, Java, Dart</td>
                </tr>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Frameworks</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>Flutter, Unity, React</td>
                </tr>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Backend</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>Node.js, Express, FastAPI</td>
                </tr>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Databases</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>MongoDB, MySQL, PostgreSQL, SQLite</td>
                </tr>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Tools</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>Firebase, Supabase, Git</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where I've Worked Section */}
      <section style={{ width: '100%', background: '#faf8f6', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 1rem 5rem 1rem' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#222', marginBottom: '2.5rem', textAlign: 'center' }}>Where I've Worked</h2>
        <div style={{ width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Card 1 */}
          <div style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 24px #0001', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#222' }}>Software Developer</div>
                <div style={{ color: '#888', fontSize: '1rem', marginTop: 2 }}>May 2025 – Present</div>
              </div>
              <span style={{ fontSize: '1.5rem', color: '#ff5722' }}>🧑‍💻</span>
            </div>
            <ul style={{ color: '#444', fontSize: '1.05rem', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.7 }}>
              <li>Built and maintained front-end and back-end systems along with project architecture using a real-time repository.</li>
              <li>Managed multiple projects within a single codebase, ensuring smooth collaboration and consistent development workflows.</li>
              <li>Resolved bugs and issues effectively based on feedback from testers and QA teams.</li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginTop: '0.5rem' }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#ff2d2d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '1.3rem' }}>★</span>
              </span>
              <div>
                <div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>Fluxion Tech – Remote</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
