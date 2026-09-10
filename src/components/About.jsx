// src/components/About.jsx
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const skillCategories = document.querySelectorAll('.skill-category');
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('show');
      }, 100 * index);
    });

    skillCategories.forEach((category) => {
      category.addEventListener('click', () => {
        skillCategories.forEach((cat) => cat.classList.remove('active'));
        category.classList.add('active');

        const selectedCategory = category.dataset.category;

        progressBars.forEach((bar) => {
          if (selectedCategory === 'all') {
            bar.style.display = 'flex';
          } else if (bar.classList.contains(selectedCategory)) {
            bar.style.display = 'flex';
          } else {
            bar.style.display = 'none';
          }
        });
      });
    });
  }, []);

  return (
    <section className="container about" id="about">
      <div className="main-title">
        <h2>
          About <span>me</span>
          <span className="bg-text">my stats</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p>
            Aspiring Full-Stack Developer and Cybersecurity Enthusiast with hands-on experience in building
            secure, scalable web applications. Skilled in backend development, modern frameworks, and security
            tools. Proven leadership experience through internship projects, strong problem-solving abilities,
            and a passion for ethical hacking and innovative technology solutions.
          </p>
        </div>

        <div className="right-about">
          {[
            { number: '7+', label: 'Projects Built' },
            { number: '2+', label: 'Years of Learning' },
            { number: '4', label: 'Core Skill Areas' },
            { number: '1st', label: 'Science Exhibition' }
          ].map((item, index) => (
            <div className="about-item" key={index}>
              <div className="abt-text">
                <p className="large-text">{item.number}</p>
                <p className="small-text">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="skills-categories">
          <button className="skill-category active" data-category="all">All Skills</button>
          <button className="skill-category" data-category="dev">Development</button>
          <button className="skill-category" data-category="security">Security</button>
          <button className="skill-category" data-category="networking">Networking</button>
        </div>

        <div className="progress-bars">
          {[
            { skill: 'HTML5', percent: '88%', className: 'html', category: 'dev' },
            { skill: 'CSS3', percent: '86%', className: 'css', category: 'dev' },
            { skill: 'JavaScript', percent: '82%', className: 'js', category: 'dev' },
            { skill: 'React.js', percent: '84%', className: 'react', category: 'dev' },
            { skill: 'Node.js', percent: '80%', className: 'node', category: 'dev' },
            { skill: 'Python', percent: '85%', className: 'python', category: 'dev' },
            { skill: 'JAVA', percent: '78%', className: 'java', category: 'dev' },
            { skill: 'Rust', percent: '72%', className: 'rust', category: 'security' },
            { skill: 'MongoDB', percent: '82%', className: 'mongodb', category: 'dev' },
            { skill: 'MySQL', percent: '80%', className: 'mysql', category: 'dev' },
            { skill: 'Firebase', percent: '75%', className: 'firebase', category: 'dev' },
            { skill: 'Git', percent: '88%', className: 'html', category: 'dev' },
            { skill: 'GitHub', percent: '90%', className: 'js', category: 'dev' },
            { skill: 'VS Code', percent: '90%', className: 'css', category: 'dev' },
            { skill: 'JIRA', percent: '75%', className: 'react', category: 'dev' },
            { skill: 'Netlify', percent: '82%', className: 'node', category: 'dev' },
            { skill: 'Linux Kernel', percent: '85%', className: 'linuxsec', category: 'security' },
            { skill: 'C', percent: '78%', className: 'nmap', category: 'security' },
            { skill: 'Bash', percent: '82%', className: 'burp', category: 'security' },
            { skill: 'Docker', percent: '80%', className: 'wireshark', category: 'security' },
            { skill: 'Cybersecurity', percent: '83%', className: 'osint', category: 'security' },
            { skill: 'Ethical Hacking', percent: '80%', className: 'pentest', category: 'security' },
            { skill: 'Networking', percent: '76%', className: 'networking', category: 'networking' },
            { skill: 'Vulnerability Assessment', percent: '75%', className: 'vuln', category: 'security' }
          ].map((item, index) => (
            <div className={`progress-bar ${item.category}`} key={index}>
              <p className="prog-title">{item.skill}</p>
              <div className="progress-con">
                <p className="prog-text">{item.percent}</p>
                <div className="progress">
                  <span className={item.className} style={{ width: item.percent }}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h4 className="stat-title">My Certificates</h4>
      <div className="certificates-grid">
        {[
          {
            title: 'Generative AI Mastery Workshop',
            provider: 'OpenAI Academy / NxtWave',
            year: '2025',
            img: '/cert/openai.png'
          },
          {
            title: 'Innovation & Design Thinking',
            provider: 'IBM',
            year: '2024',
            img: '/cert/ibm.png'
          },
          {
            title: 'Cybersecurity Analyst Job Simulation',
            provider: 'Tata (Forage)',
            year: '2025',
            img: '/cert/cyber.jpeg'
          },
          {
            title: 'Python Programming Certification',
            provider: 'Infosys Springboard',
            year: '2025',
            img: '/cert/react.png'
          },
          {
            title: 'Java Programming Certification',
            provider: 'Infosys Springboard',
            year: '2025',
            img: '/cert/js.png'
          },
          {
            title: 'HTML5',
            provider: 'Infosys',
            year: '2025',
            img: '/cert/html.png'
          }
        ].map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img src={cert.img} alt={cert.title} />
            <div className="certificate-overlay">
              <h5>{cert.title}</h5>
              <p>{cert.provider}</p>
              <p>{cert.year}</p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="stat-title">My Education</h4>
      <div className="timeline">
        {[
          {
            year: '2023 - 2025',
            degree: 'Diploma in Computer Science & Engineering',
            school: 'GPT Mudhol'
          },
          {
            year: '2022',
            degree: '10th Grade',
            school: 'MAM School, Terdal'
          }
        ].map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="tl-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <p className="tl-duration">{edu.year}</p>
            <p><strong>{edu.degree}</strong></p>
            <p>{edu.school}</p>
          </div>
        ))}
      </div>

      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        {[
          {
            date: '2025 - Present',
            title: 'Full-Stack Developer & Cybersecurity Enthusiast',
            place: 'Independent Projects',
            about: 'Building secure, scalable applications and continuing hands-on experimentation in systems engineering, AI, and distributed architectures.'
          },
          {
            date: '2024 - 2025',
            title: 'Backend Developer & Team Leader (Intern)',
            place: 'BITS Pvt Ltd, Belagavi',
            about: 'Led a development team, delivered multiple projects, designed backend architecture, managed database integration, and applied secure coding practices.'
          },
          {
            date: '2023 - 2025',
            title: 'Diploma in Computer Science & Engineering',
            place: 'GPT Mudhol',
            about: 'Focused on programming fundamentals, web development, networking, and software engineering concepts.'
          }
        ].map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">{item.date}</p>
            <h5>{item.title}<span> - {item.place}</span></h5>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
