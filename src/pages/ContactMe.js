import react from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ContactMe() {
  const [subject, setSubject] = react.useState('');
  const [message, setMessage] = react.useState('');

  const handelSubjectChange = (event) => {
    setSubject(event.target.value);
  }

  const handelMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
      <div className="contact">
        <div className="title">
          <h1>Let's chat.</h1>
          <h1>Do you have some great opportunity for me?</h1>
        </div>
          <div className="contactInfo">
            <h1>Let me know!</h1>
            <form>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Full name" required/>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Email address" required/>
              </div>
              <div className="form-group">
                <input id="subject" name="subject" placeholder="Subject" onChange={handelSubjectChange} required/>
              </div>
              <div className="form-group">
                Tell me more about this opportunity <br/>
                <textarea id="message" name="message" onChange={handelMessageChange}></textarea>
              </div>
              <div className="social-links mail-icon">
                <a href={`mailto:westerdijk@pm.me?subject=${subject}&body=${message}`}
                    target="_blank">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </form>
          </div>
      </div>
  );
}

export default ContactMe;