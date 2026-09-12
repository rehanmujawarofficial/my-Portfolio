import React, { useState } from 'react';

const projects = [
  {
    title: 'RweezyOS',
    tech: 'Linux Kernel, C, Rust, Bash, Python, GRUB, systemd, Docker',
    role: 'Systems Engineer / Linux Developer',
    impact: 'Built a custom Linux distribution focused on operating-system development, kernel internals, and low-level system engineering.',
    image: 'img/port1.png',
    github: 'https://github.com/RihanMujawar/rweezyos',
    desc: 'Custom Linux distribution with reusable build workflows, system service integration, and kernel/userspace interaction improvements.',
  },
  {
    title: 'LLM From Scratch',
    image: 'img/port3.png',
    tech: 'Python, PyTorch, Transformers, CUDA',
    role: 'AI/ML Developer',
    impact: 'Implemented an end-to-end transformer training pipeline, including pretraining, fine-tuning, and post-training experimentation.',
    github: 'https://github.com/RihanMujawar/train-llm-from-scratch',
    desc: 'Transformer-based language model development covering tokenization, attention layers, evaluation, and alignment workflows.',
  },
  {
    title: 'Rweezy',
    image: 'img/port4.png',
    tech: 'React 19, TypeScript, Kotlin, Jetpack Compose, Node.js, PostgreSQL, Docker, Twilio, Mapbox',
    role: 'Full-Stack Developer / Team Lead',
    impact: 'Architected a distributed multi-service marketplace with geolocation discovery, live tracking, secure authentication, and Dockerized deployment.',
    github: 'https://github.com/RihanMujawar/rweezy',
    desc: 'Microservices-based marketplace combining a React web frontend, native Android app, and secure backend services.',
  },
  {
    title: 'End-to-End Encrypted Messaging App',
    image: 'img/port5.png',
    tech: 'Node.js, WebSockets, MongoDB, Web Crypto API, ECDH, AES-GCM, HKDF',
    role: 'Backend Developer / Security Engineer',
    impact: 'Developed a real-time secure messaging platform with client-side encryption, low-latency delivery, and optimized storage.',
    github: 'https://github.com/RihanMujawar/e2ee',
    desc: 'Real-time messaging application focused on E2EE using Web Crypto, ECDH, AES-GCM, and secure MongoDB schema design.',
  },
  {
    title: 'My AI 007',
    image: 'img/port3.png',
    tech: 'Python, Gemini API, React, JavaScript',
    role: 'Full-Stack Developer',
    impact: 'Built a hands-free AI personal assistant with voice-driven commands, local automation, and interactive web controls.',
    github: 'https://github.com/RihanMujawar/AI007/',
    desc: 'AI desktop assistant combining Python automation, Gemini API integration, and a React-based frontend.',
  },
  {
    title: 'AI Personal Assistant',
    image: 'img/port4.png',
    tech: 'Python, Gemini API',
    role: 'Backend Developer',
    impact: 'Automated daily tasks and enabled natural-language system workflows for a more efficient user experience.',
    github: 'https://github.com/RihanMujawar/personal-AI-assistant',
    desc: 'Voice-enabled personal assistant built in Python using Gemini APIs for local automation and task execution.',
  },
  {
    title: 'Portfolio Website',
    image: 'img/pro1.png',
    tech: 'React, CSS',
    role: 'Full-Stack Developer',
    impact: 'Showcases projects, skills, and experience in a modern, responsive portfolio layout.',
    github: 'https://github.com/RihanMujawar/my-portfolio/tree/main',
    live: 'https://rehan07.netlify.app/',
    desc: 'Personal portfolio built to highlight technical work, projects, certifications, and contact information.',
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectToggle = (index) => {
    setActiveProject((current) => (current === index ? null : index));
  };

  return (
    <section className="container" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Projects</span>
          <span className="bg-text">Portfolio</span>
        </h2>
      </div>
      <p className="port-text">
        Selected work across full-stack development, security engineering, AI systems, and Linux-based projects.
      </p>
      <div className="portfolio-blurb">
        <p>
          Driven by a passion to build secure, scalable, and user-focused solutions. I enjoy turning ideas into
          reliable digital products backed by strong engineering fundamentals.
        </p>
      </div>
      <div className="portfolios">
        {projects.map((project, index) => (
          <div className={`portfolio-item ${activeProject === index ? 'active' : ''}`} key={index}>
            <div
              className="image"
              onClick={() => handleProjectToggle(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleProjectToggle(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <img src={project.image} alt={project.title} />
              <div className="hover-items">
                <h3>{project.title}</h3>
                <div className="project-details">
                  <p className="tech-stack"><i className="fas fa-code"></i> {project.tech}</p>
                  <p className="role"><i className="fas fa-user"></i> {project.role}</p>
                  <p className="impact"><i className="fas fa-chart-line"></i> {project.impact}</p>
                </div>
                <div className="icons">
                  {project.github && (
                    <a href={project.github} className="icon" target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="icon" target="_blank" rel="noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
            {project.desc && <p className="project-desc">{project.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
