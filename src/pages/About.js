import react from 'react';
import me from '../data/me.jpg';
import cv from '../data/cv.pdf';
import headlineelement from '../data/headlineElement.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  return (
      <div className="about-content">
        <div className='about-image-and-icons'>
          <img src={headlineelement} alt="haeder-image" className="haeder-image" />
          <img src={me} alt="me" className="about-image" />
          <div className="social-links">
            <a href="https://www.linkedin.com/in/noga-tal-79a634227/" target="_blank"><i className="fab fa-linkedin" title='linkedIn'></i></a>
            <a href="https://github.com/NogaTal98" target="_blank"><i className="fab fa-github" title='gitHub'></i></a>
            <a href={cv} target="_blank"><i className="fa-solid fa-download" title='resume'></i></a>
          </div>
        </div>
        <div className="about-text">
          <div className="about-header">ABOUT ME</div>
          <p>
            I am Noga Tal, a software engineer from Herzliya. 
            I studied computer science (BSc) at Reichman University, where I built a solid foundation in the field. 
            
          </p>
          <p>
            I spent 1.5 years at Red Hat as a Software Quality Engineer, where I worked with Cypress and JavaScript to create new UI tests from scratch for our product. 
            Additionally, I maintained existing end-to-end tests and developed new features using Ansible. 
            My time at Red Hat also provided me with valuable experience in OpenShift and cloud platforms such as AWS.
          </p>
          <p>
            In my free time, I enjoy working on private projects using React, TypeScript, JavaScript, Python, and Firebase. 
            I have a deep passion for software development and a knack for quickly learning new technologies, which continually fuels my growth and enthusiasm in this ever-evolving field. 
            And when I'm not coding, you can find me debugging my plants – turns out, they don't appreciate being watered on a strict deployment schedule!
          </p>
        </div>
      </div>
  );
}

export default About;