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
            <form action={`mailto:isanyo.noga@gmail.com?subject=${subject}&body=${message}`} method="post">
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Full name*" required/>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Email address*"required/>
              </div>
              <div className="form-group">
                <input id="subject" name="subject" placeholder="Subject*" onChange={handelSubjectChange} required/>
              </div>
              <div className="form-group">
                Tell me more about this opportunity* <br/>
                <textarea id="message" name="message" onChange={handelMessageChange} required></textarea>
              </div>
              <button type="submit" className="social-links mail-icon"> <i class="fa-solid fa-envelope"></i> </button>
              
            </form>
          </div>
      </div>
  );
}

export default ContactMe;