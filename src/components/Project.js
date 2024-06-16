import React from 'react';

function Project({image, name, description, link, repo}) {
  return (
    <div className="column30p">
      <div className="flip-container">
        <div className="flipper">
          <div className="flip-card-front">
            <img src={image} className="img" alt={name}/>
          </div>
          <div className="back">
              <h1>{name}</h1>
              <p>{description}</p>
              {link == null ? <p></p> : <p><a href={link} className="link" target="_blank">demo site</a></p>}
              <p><a href={repo} className="link" target="_blank">GitHub repo</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;