import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 4vw', boxSizing: 'border-box', background: '#fff', boxShadow: '0 2px 8px #0001', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ff5722', background: '#fff', padding: '0.3rem 1.2rem', borderRadius: '0.7rem', boxShadow: '0 2px 8px #0001' }}>Shah</div>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#222', textDecoration: 'none', fontWeight: 500 }}>About</Link>
        <Link to="/projects" style={{ color: '#222', textDecoration: 'none', fontWeight: 500 }}>Projects</Link>
        <Link to="/contact" style={{ color: '#222', textDecoration: 'none', fontWeight: 500 }}>Contact</Link>
        <a href="https://github.com/Shah139" target="_blank" rel="noopener noreferrer" style={{ background: '#222', color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '1rem', marginLeft: '2rem', boxShadow: '0 2px 8px #0002', textDecoration: 'none', fontWeight: 600 }}>Github</a>
      </nav>
    </header>
  );
} 