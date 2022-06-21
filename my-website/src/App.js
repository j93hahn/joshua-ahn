import logo from './svg/logo.svg';
import github from './svg/github.svg';
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

class socialMedia { // object for social media pages
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}

const LinkedIn = new socialMedia("LinkedIn", "https://www.linkedin.com/in/joshua-ahn-uchicago/");
const Github = new socialMedia("GitHub", "https://github.com/j93hahn");
const Instagram = new socialMedia("Instagram", "https://www.instagram.com/_joshuaahn/");
const Facebook = new socialMedia("Facebook", "https://www.facebook.com/j93hahn/");

class projectContainer { // object for project displays
    constructor(name, code) {
        this.name = name;
        this.code = code; // Github source code link
    }
}

const Perceptron = new projectContainer("Multi-Layer Perceptron", "");
const Transformer = new projectContainer("Transformer", "");

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a href={Github.link} target="_blank" rel="noopener noreferrer">
                    <img src={github} className="Social-media" alt="Github link" />
                </a>
            </header>
        </div>
    );
}

export default App;
