import logo from './logo.svg';
import './App.css';

/*
 * Important commands:
 * 1. npm start - runs localhost environment
 * 2. npm run build - builds production environment
 * 3. npm run deploy - deploy the App to github pages
 */

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
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
