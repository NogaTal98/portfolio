import React from 'react';

function Project({image, name, description, link, repo}) {
  return (
    <div class="column30p">
      <div class="flip-container">
        <div class="flipper">
          <div class="flip-card-front">
            <img src={image} className="img" alt={name}/>
          </div>
          <div class="back">
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