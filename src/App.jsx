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
            I Build <span style={{ color: '#222', fontWeight: 700 }}>Full-Stack Stuff</span><br />That Actually Works!
          </h1>
          <p style={{ color: '#555', fontSize: '1.1rem', maxWidth: 500, textAlign: 'center', marginBottom: '2rem' }}>
            Code, bugs, and late-night coffee keep it all running.<br />I turn complex problems into clean, working solutions.
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
              I'm a full-stack developer who writes code that doesn't bark! I eat & solve problems. From API and database to client UI for each. Pay for coffee late, work harder and solve tasks like it's a hackathon.<br /><br />
              I like building things that scale, make sense, and don't break under pressure most of the time. Complex challenges? Bring 'em on! I turn chaos into clean, working solutions.
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
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>C++, JavaScript, TypeScript</td>
                </tr>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Frontend</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>React, Next, Remix, Redux, Tailwind, Bootstrap, MUI, Shadcn, Stripe, Framer</td>
                </tr>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Backend</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>NodeJS, Express, Hasura, AWS, Redis, RDS, Microservices, Paddle, Stripe, GitHub Action, NGINX, Console Server</td>
                </tr>
                <tr style={{ borderTop: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.2rem', color: '#ff5722', fontWeight: 600 }}>Database</td>
                  <td style={{ padding: '1rem 1.2rem', color: '#222' }}>MongoDB, Mongoose, MySQL, PostgreSQL, Prisma</td>
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
                <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#222' }}>Software Engineer</div>
                <div style={{ color: '#888', fontSize: '1rem', marginTop: 2 }}>Apr 2023 – Apr 2025</div>
              </div>
              <span style={{ fontSize: '1.5rem', color: '#ff5722' }}>🧑‍💻</span>
            </div>
            <ul style={{ color: '#444', fontSize: '1.05rem', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.7 }}>
              <li>Built and maintained backend systems and project architecture using a monorepo for multiple apps.</li>
              <li>Led front and back-end teams, handled task distribution, code reviews, and made key tech decisions.</li>
              <li>Designed ERDs, planned flows, and built scalable database schemas for performance and reliability.</li>
              <li>Managed 20+ projects in one codebase, keeping collaboration smooth and development consistent.</li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginTop: '0.5rem' }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#ff2d2d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '1.3rem' }}>★</span>
              </span>
              <div>
                <div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>OctopusX</div>
                <div style={{ color: '#888', fontSize: '0.95rem' }}>Chattogram, Bangladesh</div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 24px #0001', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#222' }}>Full Stack Developer</div>
                <div style={{ color: '#888', fontSize: '1rem', marginTop: 2 }}>Jan 2023 – Apr 2023</div>
              </div>
              <span style={{ fontSize: '1.5rem', color: '#ff5722' }}>🧑‍💻</span>
            </div>
            <ul style={{ color: '#444', fontSize: '1.05rem', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.7 }}>
              <li>Handled MongoDB indexing, search, filter, and pagination using Atlas Search; optimized DB structure.</li>
              <li>Integrated Cloudflare R2, Mixpanel, Mailgun, Stripe, PayPal, and real-time notifications.</li>
              <li>Built bulk file/video upload & download, responsive dashboards, and analytics tracking.</li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginTop: '0.5rem' }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#7fff2d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '1.3rem' }}>★</span>
              </span>
              <div>
                <div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>Monster Studio</div>
                <div style={{ color: '#888', fontSize: '0.95rem' }}>Chattogram, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
