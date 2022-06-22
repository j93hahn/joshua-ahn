import { projects } from './projects/projects.js';
import { socials, aboutMe, contact } from './personal/personal.js';
import { college } from './education/education.js';
import './App.css';


/*
 * Important commands:
 * 1. npm start - runs localhost environment
 * 2. npm run build - builds production environment
 * 3. npm run deploy - deploy the App to github pages (build included)
 */


function App() {
    return (
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
    );
};


export default App;
