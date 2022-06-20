import logo from './logo.svg';
import './App.css';

/*
 * Important commands:
 * 1. npm start - runs localhost environment
 * 2. npm run build - builds production environment
 * 3. npm run deploy - deploy the App to github pages (build included)
 */

class project_container { // object for project displays
    constructor(name, topic) {
        this.name = name;
        this.topic = topic;
    }
}

const MLP = new project_container("Multi-Layer Perceptron", "Machine Learning");
const Transformer = new project_container("Transformer", "Machine Learning");

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    {MLP.name}
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
        </div>
    );
}

export default App;
