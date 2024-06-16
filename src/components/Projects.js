import react from 'react';
import Project from './Project';
import wordle from '../pictures/wordle.jpg';
import wikispeedrun from '../pictures/wiki-speed-run.jpg';
import mouserace from '../pictures/mouse_race.jpg';

function Projects() {
  return (
    <div className="card">
        <div className="card-container">
            <div className="row">
                <Project image={wordle} 
                    name={"wordle"} 
                    description={"A clone of the popular New York Times game, Wordle"} 
                    link={"https://wordle-noga.web.app/"} 
                    repo={"https://github.com/NogaTal98/wordle"}/>
                <Project image={wikispeedrun} 
                    name={"Wiki Speed Run"} 
                    description={"An AI agent that, by providing any starting and desired words, find a hyperlink path from the starting word to the wikipedia page of the desired word."} 
                    link={"https://wiki-speedrun.web.app/"} 
                    repo={"https://github.com/NogaTal98/wiki-speedrun"}/>
                <Project image={mouserace} 
                    name={"Mouse Race"} 
                    description={"Three.js game"} 
                    repo={"https://github.com/NogaTal98/mouse_race"}/>
            </div>
        </div>
    </div>
  );
}

export default Projects;