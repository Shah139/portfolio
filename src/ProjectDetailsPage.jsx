import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header.jsx';

// Custom hook for responsive design
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Import images
import snapsdi1 from './assets/projects/snapsdi1.png';
import snapsdi2 from './assets/projects/snapsdi2.png';
import snapsdi3 from './assets/projects/snapsdi3.png';
import snapsdi4 from './assets/projects/snapsdi4.png';
import snapsdi5 from './assets/projects/snapsdi5.png';
import snapsdi6 from './assets/projects/snapsdi6.png';
import snapsdi7 from './assets/projects/snapsdi7.png';
import timecraft1 from './assets/projects/427469063-49cbe623-9407-45d6-be77-603b79b2de36.png';
import timecraft2 from './assets/projects/427470742-8511c1df-cb7a-4037-bf2f-32b44668ce33.png';
import timecraft3 from './assets/projects/427470251-fe482535-c06a-456a-aa7f-bb1df6897831.png';
import timecraft4 from './assets/projects/427469880-3332ea40-e711-47d8-bd6d-1ed40ea6d670.png';
import quranUI from './assets/projects/ui.png';
import khabar1 from './assets/projects/Khabar_khabo/Screenshot_2025-08-19-11-36-01-616_com.example.khabar_khabo.jpg';
import khabar2 from './assets/projects/Khabar_khabo/Screenshot_2025-08-19-11-36-12-783_com.example.khabar_khabo.jpg';
import khabar3 from './assets/projects/Khabar_khabo/Screenshot_2025-08-19-11-36-23-616_com.example.khabar_khabo.jpg';
import khabar4 from './assets/projects/Khabar_khabo/Screenshot_2025-08-19-11-36-38-764_com.example.khabar_khabo.jpg';
import khabar5 from './assets/projects/Khabar_khabo/Screenshot_2025-08-19-11-37-01-599_com.example.khabar_khabo.jpg';
import khabar6 from './assets/projects/Khabar_khabo/Screenshot_2025-08-19-11-37-01-599_com.example.khabar_khabo.jpg';
import carNotes1 from './assets/projects/car-notes/dfs (1).jpg';
import carNotes2 from './assets/projects/car-notes/dfs (2).jpg';
import carNotes3 from './assets/projects/car-notes/dfs (3).jpg';
import carNotes4 from './assets/projects/car-notes/dfs (4).jpg';
import carNotes5 from './assets/projects/car-notes/dfs (5).jpg';
import carNotes6 from './assets/projects/car-notes/dfs (6).jpg';
import carNotes7 from './assets/projects/car-notes/dfs (7).jpg';
import bbm1 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.56.45_209a86fd.jpg';
import bbm2 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.56.11_b8258a5f.jpg';
import bbm3 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.08_210a3da6.jpg';
import bbm4 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.08_edf7c204.jpg';
import bbm5 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.07_7c60c9dd.jpg';
import bbm6 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.06_3fe00c0a.jpg';
import bbm7 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.05_7464dd30.jpg';
import bbm8 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.03_1bc59948.jpg';
import bbm9 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.03_4884ab07.jpg';
import bbm10 from './assets/projects/bbm/WhatsApp Image 2025-08-22 at 00.55.04_9fb2698c.jpg';

const projects = [
  {
    id: 'bbm-shop',
    title: 'BBM Shop',
    date: 'Dec 15, 2024',
    description: 'A comprehensive Flutter e-commerce app for BBM Business Bangla Machineries - a leading supplier of industrial machinery in Bangladesh. Features JWT authentication, product catalog, shopping cart, and custom PDF quotation generation.',
    details: [
      'Features:',
      ' JWT Authentication System: WordPress integration with secure login and token management',
      ' E-commerce Core: Product catalog with 1000+ industrial machinery products',
      ' Smart Categorization: Hierarchical category system (A through K categories)',
      ' Product Management: Dynamic status, rich specifications, and image gallery',
      ' Custom PDF Generation: Professional quotation PDFs with company branding',
      ' Data Management: SQLite database with WooCommerce API integration',
      ' State Management: Provider pattern with real-time updates',
      'Tech Stack:',
      'Flutter (Frontend Framework)',
      'WordPress + WooCommerce (Backend & E-commerce)',
      'JWT Authentication (Secure API Access)',
      'SQLite (Local Database)',
      'Provider (State Management)',
      'PDF Generation & Printing'
    ],
    packages: [
      'flutter',
      'provider',
      'http',
      'sqflite',
      'shared_preferences',
      'cached_network_image',
      'carousel_slider',
      'shimmer',
      'flutter_staggered_grid_view',
      'pdf',
      'printing',
      'open_file',
      'image',
      'connectivity_plus',
      'url_launcher',
      'share_plus',
      'crypto'
    ],
    screenshots: [
      bbm1,
      bbm2,
      bbm3,
      bbm4,
      bbm5,
      bbm6,
      bbm7,
      bbm8,
      bbm9,
      bbm10
    ],
    workflow: [
      'Client project for BBM Business Bangla Machineries (established 2017)',
      'Integrated WordPress backend with JWT authentication system',
      'Developed comprehensive e-commerce features with WooCommerce API',
      'Implemented custom PDF generation for professional quotations',
      'Built local SQLite database with offline functionality',
      'Created responsive UI with Material Design principles',
      'Deployed cross-platform app supporting Android and iOS',
      'Delivered complete solution for industrial machinery sales'
    ],
    github: 'https://github.com/Shah139'
  },
  {
    id: 'car-service-tracker',
    title: 'Car Service Tracker',
    date: 'Jan 15, 2024',
    description: 'A comprehensive Flutter application for managing vehicle maintenance, fuel consumption, and service reminders with cloud backup and real-time synchronization.',
    details: [
      'Features:',
      ' Dashboard: Multi-vehicle overview with cost breakdowns and interactive charts',
      ' Vehicle Management: Add/edit vehicles with photos and complete profiles',
      ' Service Tracking: Comprehensive maintenance log with cost tracking',
      ' Fuel Management: Track fuel purchases, consumption, and efficiency metrics',
      ' Smart Reminders: Date and mileage-based service notifications',
      ' Cloud Features: Supabase backend with real-time sync and offline support',
      ' Analytics & Reporting: Cost breakdowns, monthly trends, and PDF export',
      'Tech Stack:',
      'Flutter 3.7.0+ (Frontend)',
      'GetX 4.6.6 (State Management)',
      'Supabase 1.10.7 (Backend & Database)',
      'SQLite (Local Database)',
      'fl_chart 0.66.2 (Data Visualization)',
      'PDF Generation & Printing'
    ],
    packages: [
      'flutter',
      'get',
      'supabase_flutter',
      'sqflite',
      'fl_chart',
      'pdf',
      'printing',
      'image_picker',
      'path_provider',
      'shared_preferences',
      'uuid',
      'intl',
      'crypto',
      'motion'
    ],
    screenshots: [
      carNotes1,
      carNotes2,
      carNotes3,
      carNotes4,
      carNotes5,
      carNotes6,
      carNotes7
    ],
    workflow: [
      'User creates account and logs in to the app',
      'Add vehicles with photos, details, and license plate information',
      'Log service entries with costs, mileage, and photo documentation',
      'Track fuel purchases and consumption for cost analysis',
      'Set up service reminders for maintenance intervals',
      'View interactive charts and analytics for cost breakdowns',
      'Generate PDF reports and export data',
      'Real-time sync across devices with offline support'
    ],
    github: 'https://github.com/Shah139'
  },
  {
    id: 'khabar-khabo',
    title: 'Khabar Khabo',
    date: 'Aug 19, 2025',
    description: 'A modern food delivery application built with Flutter that connects users with delicious food from local restaurants. Order your favorite meals, customize them with add-ons, and track your delivery in real-time.',
    details: [
      'Features:',
      ' Extensive Menu: Browse through various food categories including burgers, salads, cookies, desserts, and drinks',
      ' Customizable Orders: Add extra toppings, sauces, and ingredients to personalize your meal',
      ' Smart Cart System: Easy-to-use shopping cart with real-time price calculations',
      ' Location Services: Get accurate delivery to your current location',
      ' User Authentication: Secure login and registration system',
      ' Firebase Integration: Real-time data synchronization and cloud storage',
      ' Payment Integration: Support for bKash and other payment methods',
      ' Order Tracking: Real-time delivery progress updates',
      ' Theme Support: Light and dark mode with customizable themes',
      ' Cross-platform: Available on both Android and iOS devices',
      'Tech Stack:',
      'Flutter (Frontend)',
      'Firebase (Database & Backend)',
      'GetX (State Management)',
      'Google Maps (Location Services)',
      'Payment Gateway Integration'
    ],
    packages: [
      'flutter',
      'firebase_core',
      'cloud_firestore',
      'firebase_auth',
      'get',
      'google_maps_flutter',
      'geolocator',
      'image_picker',
      'cupertino_icons',
      'flutter_test',
      'integration_test',
      'flutter_lints'
    ],
    screenshots: [
      khabar1,
      khabar2,
      khabar3,
      khabar4,
      khabar5,
      khabar6
    ],
    workflow: [
      'User signs up or logs in to the app',
      'Browse through various food categories and menus',
      'Select items and customize with add-ons and toppings',
      'Add items to cart with real-time price calculations',
      'Set delivery location and proceed to checkout',
      'Choose payment method (bKash, etc.) and complete order',
      'Track delivery progress in real-time',
      'Receive food at the specified location'
    ],
    github: 'https://github.com/Shah139/khabar-khabo'
  },
  {
    id: 'snapsdi',
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
      snapsdi1,
      snapsdi2,
      snapsdi3,
      snapsdi4,
      snapsdi5,
      snapsdi6,
      snapsdi7
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
    id: 'timecraft',
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
      timecraft1,
      timecraft2,
      timecraft3,
      timecraft4
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
    id: 'quran-in-bangla',
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
      quranUI
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

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { width } = useWindowSize();

  // Find the project by ID
  const project = projects.find(p => p.id === projectId);

  // Touch/swipe functionality for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && project.screenshots.length > 1) {
      nextImage();
    }
    if (isRightSwipe && project.screenshots.length > 1) {
      prevImage();
    }
  };

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', width: '100%', background: '#faf8f6', padding: '0', margin: '0' }}>
        <Header />
        <div style={{ 
          width: '100%', 
          maxWidth: 1100, 
          margin: '0 auto', 
          padding: '4rem 1rem 2rem 1rem', 
          textAlign: 'center' 
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
            fontWeight: 800, 
            color: '#222', 
            marginBottom: '1rem' 
          }}>
            Project Not Found
          </h1>
          <p style={{ 
            color: '#555', 
            fontSize: 'clamp(1rem, 3vw, 1.15rem)', 
            marginBottom: '2rem' 
          }}>
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/projects')}
            style={{
              background: '#222',
              color: '#fff',
              padding: '0.7rem 1.7rem',
              borderRadius: '1.2rem',
              fontSize: 'clamp(1rem, 3vw, 1.1rem)',
              fontWeight: 600,
              border: 'none',
              boxShadow: '0 2px 8px #0002',
              cursor: 'pointer',
            }}
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#faf8f6', padding: '0', margin: '0' }}>
      <Header />
      <div style={{ 
        width: '100%', 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 1rem) clamp(1rem, 3vw, 2rem) clamp(1rem, 3vw, 1rem)' 
      }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff5722',
            fontSize: 'clamp(1rem, 3vw, 1.1rem)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.3rem, 1vw, 0.5rem)',
            marginBottom: 'clamp(1rem, 4vw, 2rem)',
            padding: 'clamp(0.5rem, 1.5vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.5rem)',
            borderRadius: '0.5rem',
            transition: 'all 0.2s ease',
            minHeight: '44px',
            minWidth: '44px'
          }}
          onTouchStart={(e) => {
            e.target.style.background = '#f0f0f0';
            e.target.style.transform = 'scale(0.95)';
          }}
          onTouchEnd={(e) => {
            e.target.style.background = 'none';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ← Back to Projects
        </button>

        {/* Main Content Layout */}
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(1rem, 4vw, 3rem)', 
          alignItems: 'flex-start',
          flexDirection: width <= 768 ? 'column' : 'row'
        }}>
          {/* Left Section - Project Details */}
          <div style={{ 
            flex: '1', 
            minWidth: 0,
            order: width <= 768 ? 2 : 1
          }}>
            {/* Project Header */}
            <div style={{ 
              color: '#888', 
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
              marginBottom: '0.5rem', 
              textAlign: 'left' 
            }}>
              {project.date}
            </div>
            <h1 style={{ 
              fontWeight: 800, 
              fontSize: 'clamp(2rem, 6vw, 2.8rem)', 
              color: '#222', 
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)', 
              lineHeight: 1.1, 
              textAlign: 'left' 
            }}>
              {project.title}
            </h1>
            
            {/* Project Description */}
            <p style={{ 
              color: '#444', 
              fontSize: 'clamp(1rem, 3vw, 1.15rem)', 
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)', 
              lineHeight: 1.6,
              textAlign: 'left'
            }}>
              {project.description}
            </p>

            {/* Separator Line */}
            <div style={{ 
              borderTop: '2px dashed #ddd', 
              margin: 'clamp(1.5rem, 4vw, 2rem) 0',
              width: '100%' 
            }}></div>

            {/* Features and Tech Stack */}
            <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
              {Array.isArray(project.details) ? (
                <div style={{ 
                  color: '#222', 
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.08rem)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 'clamp(0.6rem, 2vw, 0.8rem)', 
                  textAlign: 'left' 
                }}>
                  {project.details.map((line, idx) => {
                    // Check if this is a heading (ends with colon and no leading space)
                    if (line.endsWith(':') && !line.startsWith(' ')) {
                      return (
                        <div key={idx} style={{ 
                          lineHeight: 1.6,
                          fontWeight: '700',
                          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                          marginTop: idx > 0 ? 'clamp(1rem, 3vw, 1.5rem)' : '0',
                          marginBottom: '0.5rem'
                        }}>
                          {line}
                        </div>
                      );
                    }
                    // Check if this is a feature name (starts with space and contains colon)
                    else if (line.startsWith(' ') && line.includes(':')) {
                      return (
                        <div key={idx} style={{ 
                          lineHeight: 1.6,
                          paddingLeft: 'clamp(1rem, 3vw, 1.5rem)',
                          marginBottom: '0.3rem'
                        }}>
                          <span style={{ fontWeight: '700' }}>{line.substring(0, line.indexOf(':') + 1)}</span>
                          <span style={{ fontWeight: '400' }}>{line.substring(line.indexOf(':') + 1)}</span>
                        </div>
                      );
                    }
                    // Regular description text (starts with space, no colon)
                    else if (line.startsWith(' ') && !line.includes(':')) {
                      return (
                        <div key={idx} style={{ 
                          lineHeight: 1.6,
                          paddingLeft: 'clamp(2rem, 5vw, 3rem)',
                          fontWeight: '400',
                          marginBottom: '0.5rem'
                        }}>
                          {line}
                        </div>
                      );
                    }
                    // Tech stack items (no leading space, no colon)
                    else {
                      return (
                        <div key={idx} style={{ 
                          lineHeight: 1.6,
                          paddingLeft: 'clamp(1rem, 3vw, 1.5rem)',
                          fontWeight: '400',
                          marginBottom: '0.3rem'
                        }}>
                          {line}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <div style={{ 
                  color: '#222', 
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.08rem)', 
                  textAlign: 'left' 
                }}>
                  {project.details}
                </div>
              )}
            </div>

            {/* Packages Section */}
            {project.packages && (
              <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                <div style={{ 
                  fontWeight: 700, 
                  marginBottom: 'clamp(0.8rem, 2vw, 1rem)', 
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                  color: '#222', 
                  textAlign: 'left' 
                }}>
                  Flutter Packages Used:
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 'clamp(0.6rem, 2vw, 0.8rem)', 
                  justifyContent: 'flex-start' 
                }}>
                  {project.packages.map(pkg => (
                    <span key={pkg} style={{
                      background: '#e0f7fa',
                      color: '#00796b',
                      borderRadius: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                      padding: 'clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.8rem, 2.5vw, 1.2rem)',
                      fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                      fontWeight: 500,
                      boxShadow: '0 1px 4px #0001',
                    }}>{pkg}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow Section */}
            {project.workflow && (
              <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                <div style={{ 
                  fontWeight: 700, 
                  marginBottom: 'clamp(0.8rem, 2vw, 1rem)', 
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
                  color: '#222', 
                  textAlign: 'left' 
                }}>
                  Workflow:
                </div>
                <ol style={{ 
                  color: '#444', 
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', 
                  marginLeft: 'clamp(1rem, 3vw, 1.5rem)', 
                  lineHeight: 1.8, 
                  textAlign: 'left' 
                }}>
                  {project.workflow.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* GitHub Link */}
            {project.github && (
              <div style={{ marginTop: 'clamp(1.5rem, 4vw, 2rem)' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  background: '#222',
                  color: '#fff',
                  padding: 'clamp(0.6rem, 2.5vw, 0.8rem) clamp(1.2rem, 3.5vw, 1.8rem)',
                  borderRadius: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                  boxShadow: '0 2px 8px #0002',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                  minHeight: '44px',
                  minWidth: '44px',
                  lineHeight: '1.2'
                }}
                onTouchStart={(e) => {
                  e.target.style.background = '#333';
                  e.target.style.transform = 'scale(0.95)';
                }}
                onTouchEnd={(e) => {
                  e.target.style.background = '#222';
                  e.target.style.transform = 'scale(1)';
                }}
                >View on GitHub</a>
              </div>
            )}
          </div>

          {/* Right Section - Image Slideshow */}
          <div style={{ 
            flex: width <= 768 ? 'none' : '0 0 500px', 
            width: width <= 768 ? '100%' : 'auto',
            position: width <= 768 ? 'static' : 'sticky',
            top: '6rem',
            order: width <= 768 ? 1 : 2
          }}>
            <div style={{ 
              textAlign: width <= 768 ? 'center' : 'left', 
              marginBottom: 'clamp(1rem, 3vw, 2rem)' 
            }}>
              <h3 style={{ 
                fontWeight: 700, 
                fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', 
                color: '#222', 
                marginBottom: '0.5rem' 
              }}>
                Project Screenshots
              </h3>
              <div style={{ 
                color: '#6c757d', 
                fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                fontWeight: 500
              }}>
                {currentImageIndex + 1} of {project.screenshots.length}
              </div>
            </div>

            {/* Custom Slideshow Layout */}
            <div 
              style={{ 
                position: 'relative',
                height: width <= 768 ? 'clamp(400px, 60vw, 500px)' : '600px',
                marginBottom: 'clamp(1rem, 3vw, 2rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Left Image (Half Hidden) - Only show if there are 3+ images */}
              {project.screenshots.length > 2 && (
                <div style={{
                  position: 'absolute',
                  left: '0',
                  zIndex: 1,
                  transform: 'translateX(-30%)',
                  opacity: 0.6,
                  transition: 'all 0.4s ease',
                  display: width <= 768 ? 'none' : 'block'
                }}>
                  <img
                    src={project.screenshots[(currentImageIndex - 1 + project.screenshots.length) % project.screenshots.length]}
                    alt="Previous screenshot"
                    style={{
                      width: width <= 768 ? '150px' : '200px',
                      height: width <= 768 ? '225px' : '300px',
                      objectFit: 'contain',
                      cursor: 'zoom-in'
                    }}
                    onClick={() => handleImageClick(project.screenshots[(currentImageIndex - 1 + project.screenshots.length) % project.screenshots.length])}
                  />
                </div>
              )}

              {/* Main Image (Front) - Always show */}
              <div style={{
                position: 'relative',
                zIndex: 3,
                transition: 'all 0.4s ease'
              }}>
                <img
                  src={project.screenshots[currentImageIndex]}
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  style={{
                    width: width <= 768 ? 'clamp(250px, 70vw, 300px)' : '300px',
                    height: width <= 768 ? 'clamp(375px, 105vw, 450px)' : '450px',
                    objectFit: 'contain',
                    cursor: 'zoom-in',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                  onClick={() => handleImageClick(project.screenshots[currentImageIndex])}
                />
              </div>

              {/* Right Image (Half Hidden) - Only show if there are 2+ images */}
              {project.screenshots.length > 1 && (
                <div style={{
                  position: 'absolute',
                  right: '0',
                  zIndex: 1,
                  transform: 'translateX(30%)',
                  opacity: 0.6,
                  transition: 'all 0.4s ease',
                  display: width <= 768 ? 'none' : 'block'
                }}>
                  <img
                    src={project.screenshots[(currentImageIndex + 1) % project.screenshots.length]}
                    alt="Next screenshot"
                    style={{
                      width: width <= 768 ? '150px' : '200px',
                      height: width <= 768 ? '225px' : '300px',
                      objectFit: 'contain',
                      cursor: 'zoom-in'
                    }}
                    onClick={() => handleImageClick(project.screenshots[(currentImageIndex + 1) % project.screenshots.length])}
                  />
                </div>
              )}

              {/* Navigation Arrows - Only show if there are 2+ images */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: width <= 768 ? '10px' : '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: '#fff',
                      color: '#000',
                      border: '2px solid #000',
                      borderRadius: '50%',
                      width: width <= 768 ? '44px' : '50px',
                      height: width <= 768 ? '44px' : '50px',
                      cursor: 'pointer',
                      fontSize: width <= 768 ? '1rem' : '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      zIndex: 4,
                      fontWeight: 'bold',
                      minWidth: '44px',
                      minHeight: '44px'
                    }}
                    onMouseEnter={(e) => {
                      if (width > 768) {
                        e.target.style.background = '#f8f8f8';
                        e.target.style.transform = 'translateY(-50%) scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (width > 768) {
                        e.target.style.background = '#fff';
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                      }
                    }}
                    onTouchStart={(e) => {
                      e.target.style.background = '#f0f0f0';
                      e.target.style.transform = 'translateY(-50%) scale(0.95)';
                    }}
                    onTouchEnd={(e) => {
                      e.target.style.background = '#fff';
                      e.target.style.transform = 'translateY(-50%) scale(1)';
                    }}
                  >
                    ‹
                  </button>
                  
                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: width <= 768 ? '10px' : '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: '#fff',
                      color: '#000',
                      border: '2px solid #000',
                      borderRadius: '50%',
                      width: width <= 768 ? '44px' : '50px',
                      height: width <= 768 ? '44px' : '50px',
                      cursor: 'pointer',
                      fontSize: width <= 768 ? '1rem' : '1.2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      zIndex: 4,
                      fontWeight: 'bold',
                      minWidth: '44px',
                      minHeight: '44px'
                    }}
                    onMouseEnter={(e) => {
                      if (width > 768) {
                        e.target.style.background = '#f8f8f8';
                        e.target.style.transform = 'translateY(-50%) scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (width > 768) {
                        e.target.style.background = '#fff';
                        e.target.style.transform = 'translateY(-50%) scale(1)';
                      }
                    }}
                    onTouchStart={(e) => {
                      e.target.style.background = '#f0f0f0';
                      e.target.style.transform = 'translateY(-50%) scale(0.95)';
                    }}
                    onTouchEnd={(e) => {
                      e.target.style.background = '#fff';
                      e.target.style.transform = 'translateY(-50%) scale(1)';
                    }}
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            <div style={{ 
              display: 'flex', 
              gap: 'clamp(0.6rem, 2vw, 0.8rem)', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: '0 clamp(0.5rem, 2vw, 1rem)',
              marginBottom: width <= 768 ? '1rem' : '0'
            }}>
              {project.screenshots.map((src, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: idx === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
                    minWidth: '44px',
                    minHeight: '44px'
                  }}
                  onClick={() => setCurrentImageIndex(idx)}
                  onTouchStart={(e) => {
                    if (idx !== currentImageIndex) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (idx !== currentImageIndex) {
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{
                      width: width <= 768 ? '50px' : '60px',
                      height: width <= 768 ? '67px' : '80px',
                      objectFit: 'contain',
                      borderRadius: '0.6rem',
                      border: idx === currentImageIndex ? '3px solid #ff5722' : '2px solid #dee2e6',
                      boxShadow: idx === currentImageIndex ? '0 4px 20px rgba(255,87,34,0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      minWidth: '44px',
                      minHeight: '44px'
                    }}
                  />
                  {idx === currentImageIndex && (
                    <div style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '18px',
                      height: '18px',
                      background: '#ff5722',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '0.6rem',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 8px rgba(255,87,34,0.4)'
                    }}>
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div style={{
              marginTop: 'clamp(1rem, 3vw, 1.5rem)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '100%',
                height: '4px',
                background: '#e9ecef',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${((currentImageIndex + 1) / project.screenshots.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #ff5722, #ff7043)',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            {/* Mobile Swipe Instructions */}
            {width <= 768 && project.screenshots.length > 1 && (
              <div style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '0.85rem',
                marginTop: '0.5rem',
                fontStyle: 'italic'
              }}>
                Swipe left/right or use arrows to navigate
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: width <= 768 ? '1rem' : '2rem'
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
                borderRadius: width <= 768 ? '0.5rem' : '1rem',
                boxShadow: '0 4px 32px #0008',
                background: '#fff',
                objectFit: 'contain',
              }}
            />
            <button
              onClick={() => setZoomedImage(null)}
              style={{
                position: 'absolute',
                top: width <= 768 ? '-40px' : '-50px',
                right: '0',
                background: 'rgba(255,255,255,0.9)',
                color: '#333',
                border: 'none',
                borderRadius: '50%',
                width: width <= 768 ? '35px' : '40px',
                height: width <= 768 ? '35px' : '40px',
                fontSize: width <= 768 ? '1.2rem' : '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                minWidth: '44px',
                minHeight: '44px'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 