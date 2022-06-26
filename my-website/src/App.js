// import { projects } from './projects/projects.js';
import { socials, aboutMe, contact } from './personal/personal.js';
// import { college } from './education/education.js';
import './App.css';
import { particles } from "./particle.js";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                HELLO
            </header>
            <div id="particles">
                {particles}
            </div>
            {aboutMe()}
        </div>
    );


    /*(
        <div className="App">

            {aboutMe()}
            <header className="App-header">
                {socials.github.display()}
            </header>
            {projects.perceptron.display()}
            <header>
                {Object.keys(college.activities).length}
            </header>
        </div>
    );*/
};


export default App;
