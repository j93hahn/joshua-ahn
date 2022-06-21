import { projects } from './projects.js';
import { socials, aboutMe, contact } from './personal.js';
import { college } from './education.js';
import './App.css';

/*
 * Model portfolios to follow:
 * 1. https://benrogers.dev/index.html#projects
 * 2. http://www.meganlandau.com
 * 3. https://www.seanhalpin.design ***
 * 4. https://danielkorpai.com/?ref=hackernoon.com ***
 * 5. https://brittanychiang.com/#projects ***
 * 6. http://riccardozanutta.com/?ref=hackernoon.com ***
 * 7. https://hackernoon.com/21-best-developer-portfolio-examples-p61j31wi
 */

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
        </div>
    );
}

export default App;
