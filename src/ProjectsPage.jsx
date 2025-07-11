import React, { useState } from 'react';
import Header from './Header.jsx';

const dummyProjects = [
  {
    title: 'snapsdi',
    date: 'Jul 1, 2023',
    description: 'Snapsdi is a social media app built with Flutter, powered by Supabase for database management, and GetX for state management. It enables users to connect, share posts, update profile information, and engage with others through likes and comments.',
    details: [
      'Features:',
      'User Authentication (Signup, Login, Logout)',
      'Post Creation (Share images with captions)',
      'Profile Management (Change name, bio, and profile picture)',
      "Like System (Engage with others' posts)",
      'Comment System (Interact with posts via comments)',
      'Tech Stack:',
      'Flutter (Frontend)',
      'Supabase (Database & Authentication)',
      'GetX (State Management)'
    ],
    packages: [
      'flutter',
      'supabase_flutter',
      'get',
      'image_picker',
      'cupertino_icons',
      'flutter_test',
      'integration_test',
      'flutter_lints'
    ],
    screenshots: [
      '/assets/projects/snapsdi1.png',
      '/assets/projects/snapsdi2.png',
      '/assets/projects/snapsdi3.png',
      '/assets/projects/snapsdi4.png',
      '/assets/projects/snapsdi5.png',
      '/assets/projects/snapsdi6.png',
      '/assets/projects/snapsdi7.png'
    ],
    workflow: [
      'User signs up or logs in',
      'User creates and shares posts with images and captions',
      'Profile can be updated (name, bio, picture)',
      'Users can like and comment on posts',
      'All data is managed in real-time via Supabase'
    ],
    github: 'https://github.com/Shah139/SSnapsdi'
  },
  {
    title: 'TIMECRAFT',
    date: 'Dec 15, 2023',
    description: 'TIMECRAFT is a productivity-enhancing to-do app built with Flutter and GetX for state management. It helps users efficiently manage tasks and stay organized.',
    details: [
      'Features:',
      'Task Management (Create, edit, delete tasks)',
      'Progress Tracking (Circular Progress Indicator)',
      'Data Visualization (Bar Chart for task analytics)',
      'Calendar Integration (Table Calendar for date management)',
      'Firebase Integration (Cloud Firestore for data persistence)',
      'Tech Stack:',
      'Flutter (Frontend)',
      'Firebase (Database & Backend)',
      'GetX (State Management)',
      'Flutter Charts (Data Visualization)'
    ],
    packages: [
      'flutter',
      'cloud_firestore',
      'firebase_core',
      'get',
      'percent_indicator',
      'uuid',
      'table_calendar',
      'fl_chart',
      'intl'
    ],
    screenshots: [
      '/assets/projects/427469063-49cbe623-9407-45d6-be77-603b79b2de36.png',
      '/assets/projects/427470742-8511c1df-cb7a-4037-bf2f-32b44668ce33.png',
      '/assets/projects/427470251-fe482535-c06a-456a-aa7f-bb1df6897831.png',
      '/assets/projects/427469880-3332ea40-e711-47d8-bd6d-1ed40ea6d670.png'
    ],
    workflow: [
      'User creates and manages tasks',
      'Tasks are stored in Firebase Cloud Firestore',
      'Progress is tracked with circular indicators',
      'Data is visualized through bar charts',
      'Calendar integration for date-based task management',
      'All state managed efficiently with GetX'
    ],
    github: 'https://github.com/Shah139/TIMECRAFT'
  },
  {
    title: 'Quran-in-Bangla',
    date: 'Jan 10, 2024',
    description: 'A simple and peaceful way to listen to the Quran in Bangla with visual ayah display. Built using Flutter and GetX, this app offers smooth navigation and API-driven audio playback to bring the divine message closer to your heart.',
    details: [
      'Features:',
      '🎧 Bangla Audio Playback of Quranic verses',
      '📖 Ayah Display with Images for each verse',
      '⚡ Fast and Reactive UI powered by GetX',
      '🌐 Fetches Audio & Images via API (no need for YouTube or manual search)',
      '📲 Lightweight and smooth Flutter experience',
      'Tech Stack:',
      'Flutter (Frontend)',
      'GetX (State Management)',
      'HTTP (API Integration)',
      'AudioPlayers (Audio Playback)',
      'Custom Arabic & Bangla Fonts'
    ],
    packages: [
      'flutter',
      'get',
      'http',
      'audioplayers',
      'cupertino_icons',
      'flutter_test',
      'flutter_lints'
    ],
    screenshots: [
      '/assets/projects/ui.png'
    ],
    workflow: [
      'User selects a surah from the list',
      'App fetches surah data via API endpoint (/api/{surah_number})',
      'Displays ayah images and audio files for each verse',
      'User can play audio for individual ayahs',
      'Smooth navigation between surahs with GetX state management',
      'All data is fetched dynamically from the Quran Audio in Bangla API'
    ],
    github: 'https://github.com/Shah139/Quran-in-bangla'
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

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
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '1.2rem',
                boxShadow: '0 2px 16px #0001',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                border: '1px solid #ececec',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                outline: selectedProject === proj ? '2px solid #ff5722' : 'none',
              }}
              onClick={() => setSelectedProject(proj)}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') setSelectedProject(proj); }}
              aria-label={`Open details for ${proj.title}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#888', fontSize: '1rem' }}>{proj.date}</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#222', marginBottom: '0.5rem' }}>{proj.title}</div>
              <div style={{ color: '#444', fontSize: '1.08rem', marginBottom: '0.5rem' }}>{proj.description}</div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '1.2rem',
              boxShadow: '0 4px 32px #0002',
              padding: '2.5rem 2rem',
              width: '80vw',
              maxWidth: 1100,
              height: '80vh',
              maxHeight: '90vh',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              overflowY: 'auto',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                color: '#ff5722',
                cursor: 'pointer',
              }}
              aria-label="Close project details"
            >
              ×
            </button>
            <div style={{ color: '#888', fontSize: '1rem', marginBottom: '0.5rem' }}>{selectedProject.date}</div>
            <div style={{ fontWeight: 800, fontSize: '2rem', color: '#222', marginBottom: '0.5rem' }}>{selectedProject.title}</div>
            <div style={{ color: '#444', fontSize: '1.15rem', marginBottom: '1.2rem' }}>{selectedProject.description}</div>
            {/* Details Section */}
            {Array.isArray(selectedProject.details) ? (
              <div style={{ color: '#222', fontSize: '1.08rem', marginBottom: '1.2rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {selectedProject.details.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            ) : (
              <div style={{ color: '#222', fontSize: '1.08rem', marginBottom: '1.2rem' }}>{selectedProject.details}</div>
            )}
            {/* Packages Section */}
            {selectedProject.packages && (
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Flutter Packages Used:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.packages.map(pkg => (
                    <span key={pkg} style={{
                      background: '#e0f7fa',
                      color: '#00796b',
                      borderRadius: '1.2rem',
                      padding: '0.3rem 1rem',
                      fontSize: '1rem',
                      fontWeight: 500,
                      boxShadow: '0 1px 4px #0001',
                    }}>{pkg}</span>
                  ))}
                </div>
              </div>
            )}
            {/* Screenshots Section */}
            {selectedProject.screenshots && (
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>App Screenshots:</div>
                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: 8 }}>
                  {selectedProject.screenshots.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Screenshot ${idx + 1}`}
                      style={{ width: 140, height: 255, objectFit: 'cover', borderRadius: '0.7rem', boxShadow: '0 2px 8px #0001', cursor: 'zoom-in' }}
                      onClick={() => setZoomedImage(src)}
                    />
                  ))}
                </div>
              </div>
            )}
            {/* Workflow Section */}
            {selectedProject.workflow && (
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Workflow:</div>
                <ol style={{ color: '#444', fontSize: '1.05rem', marginLeft: 18 }}>
                  {selectedProject.workflow.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
            {/* GitHub Link */}
            {selectedProject.github && (
              <div style={{ marginTop: 12 }}>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" style={{
                  background: '#222',
                  color: '#fff',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '1.2rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '1.08rem',
                  boxShadow: '0 2px 8px #0002',
                  display: 'inline-block',
                }}>View on GitHub</a>
              </div>
            )}
          </div>
        </div>
      )}
      {zoomedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}
          onClick={() => setZoomedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={zoomedImage}
              alt="Zoomed screenshot"
              style={{
                maxWidth: '85vw',
                maxHeight: '85vh',
                borderRadius: '1rem',
                boxShadow: '0 4px 32px #0008',
                background: '#fff',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
} 