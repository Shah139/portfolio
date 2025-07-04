import React from 'react';
import Header from './Header.jsx';

const dummyProjects = [
  {
    title: 'unkey.dev',
    date: 'Jul 1, 2023',
    description: 'Unkey is an open source API Key management solution. It allows you to create, manage and validate API Keys for your users. It\'s built with security and speed in mind.',
    views: '27K',
  },
  {
    title: 'planetfall.io',
    date: 'Apr 1, 2023',
    description: 'I\'m building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Planetfall allows you to find out and monitor it continuously.',
    views: '21K',
  },
  {
    title: 'highstorm.app',
    date: 'May 1, 2023',
    description: 'Simple, fast, open source custom event tracking.',
    views: '9.6K',
  },
  {
    title: 'Zod Bird',
    date: 'May 21, 2023',
    description: 'Zodbird is an e2e typed tinybird.co client library.',
    views: '7.1K',
  },
  {
    title: 'chronark.com',
    date: 'Mar 28, 2023',
    description: 'The website you\'re looking at.',
    views: '7.3K',
  },
  {
    title: 'Upstash Core Analytics',
    date: 'Feb 13, 2023',
    description: 'Low level utilities to build analytics tools on top of Upstash.',
    views: '2.4K',
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#faf8f6', padding: '0', margin: '0' }}>
      <Header />
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '4rem 1rem 2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#222', marginBottom: '0.5rem' }}>Projects</h1>
        <p style={{ color: '#555', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: 600 }}>
          Some of the projects are from work and some are on my own time.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid #e6e6e6', margin: '2.5rem 0' }} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
        }}>
          {dummyProjects.map((proj, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #0001',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              border: '1px solid #ececec',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#888', fontSize: '1rem' }}>{proj.date}</span>
                <span style={{ color: '#bbb', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: '1.1rem', marginRight: 2 }}>👁️</span> {proj.views}
                </span>
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#222', marginBottom: '0.5rem' }}>{proj.title}</div>
              <div style={{ color: '#444', fontSize: '1.08rem', marginBottom: '0.5rem' }}>{proj.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 