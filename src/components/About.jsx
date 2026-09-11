// src/components/About.jsx
import React, { useEffect } from 'react';

const skillItems = [
  { skill: 'HTML5', icon: 'fab fa-html5', category: 'dev' },
  { skill: 'CSS3', icon: 'fab fa-css3-alt', category: 'dev' },
  { skill: 'JavaScript', icon: 'fab fa-js-square', category: 'dev' },
  { skill: 'React.js', icon: 'fab fa-react', category: 'dev' },
  { skill: 'Node.js', icon: 'fab fa-node-js', category: 'dev' },
  { skill: 'Python', icon: 'fab fa-python', category: 'dev' },
  { skill: 'JAVA', icon: 'fab fa-java', category: 'dev' },
  { skill: 'MongoDB', icon: 'fas fa-database', category: 'dev' },
  { skill: 'MySQL', icon: 'fas fa-database', category: 'dev' },
  { skill: 'Firebase', icon: 'fas fa-fire', category: 'dev' },
  { skill: 'Git', icon: 'fab fa-git-alt', category: 'dev' },
  { skill: 'GitHub', icon: 'fab fa-github', category: 'dev' },
  { skill: 'VS Code', icon: 'fas fa-code', category: 'dev' },
  { skill: 'JIRA', icon: 'fas fa-tasks', category: 'dev' },
  { skill: 'Netlify', icon: 'fas fa-cloud', category: 'dev' },
  { skill: 'Linux Kernel', icon: 'fab fa-linux', category: 'security' },
  { skill: 'Kali Linux', icon: 'fab fa-linux', category: 'security' },
  { skill: 'C', icon: 'fas fa-terminal', category: 'security' },
  { skill: 'Bash', icon: 'fas fa-terminal', category: 'security' },
  { skill: 'Nmap', icon: 'fas fa-search', category: 'networking' },
  { skill: 'Wireshark', icon: 'fas fa-network-wired', category: 'networking' },
  { skill: 'Burp Suite', icon: 'fas fa-bug', category: 'security' },
  { skill: 'Metasploit', icon: 'fas fa-bolt', category: 'security' },
  { skill: 'Aircrack-ng', icon: 'fas fa-wifi', category: 'networking' },
  { skill: 'John the Ripper', icon: 'fas fa-key', category: 'security' },
  { skill: 'OWASP ZAP', icon: 'fas fa-shield-virus', category: 'security' },
  { skill: 'Docker', icon: 'fab fa-docker', category: 'security' },
  { skill: 'Cybersecurity', icon: 'fas fa-shield-alt', category: 'security' },
  { skill: 'Ethical Hacking', icon: 'fas fa-user-secret', category: 'security' },
  { skill: 'Networking', icon: 'fas fa-network-wired', category: 'networking' },
  { skill: 'Vulnerability Assessment', icon: 'fas fa-bug', category: 'security' }
];

const About = () => {
  useEffect(() => {
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillCards = document.querySelectorAll('.skill-card');

    const applyCategoryFilter = (selectedCategory) => {
      skillCategories.forEach((category) => {
        category.classList.toggle('active', category.dataset.category === selectedCategory);
      });

      skillCards.forEach((card) => {
        const shouldShow = selectedCategory === 'all' || card.dataset.category === selectedCategory;
        card.style.display = shouldShow ? 'flex' : 'none';
      });
    };

    skillCategories.forEach((category) => {
      category.addEventListener('click', () => {
        applyCategoryFilter(category.dataset.category);
      });
    });

    applyCategoryFilter('all');
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

          <div className="about-achievements">
            <h4>Achievements</h4>
            <ul>
              <li>Secured 1st Prize in Science Exhibition during high school (Grades 8, 9, and 10).</li>
              <li>Participated in (National Level India Skills Competition).</li>
            </ul>
          </div>
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

        <div className="skill-cards">
          {skillItems.map((item, index) => (
            <div className="skill-card" data-category={item.category} key={index}>
              <div className="skill-icon">
                <i className={item.icon}></i>
              </div>
              <span className="skill-name">{item.skill}</span>
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
