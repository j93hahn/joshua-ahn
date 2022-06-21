import logo from './svg/logo.svg';
import './App.css';

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

const LinkedIn = new socialMedia("LinkedIn", <a href="https://www.linkedin.com/in/joshua-ahn-uchicago/">LinkedIn</a>);
const Github = new socialMedia("GitHub", <a href="https://github.com/j93hahn">Github</a>);
const Instagram = new socialMedia("Instagram", <a href="https://www.instagram.com/_joshuaahn/">Instagram</a>);
const Facebook = new socialMedia("Facebook", <a href="https://www.facebook.com/j93hahn/">Facebook</a>);

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
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {Perceptron.name}
                    {Transformer.name}
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            <div>
                {LinkedIn.link}
                {Github.link}
                {Instagram.link}
                {Facebook.link}
            </div>
        </div>
    );
}

export default App;
