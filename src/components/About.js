import react from 'react';
import me from '../pictures/me.jpg';

function About() {
  return (
    <div>
        <img src={me} className="avatar" alt="me"/>
    </div>
  );
}

export default About;