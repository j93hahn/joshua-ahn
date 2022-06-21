import './App.css';

class projectContainer { // object for project displays
    constructor(name, code) {
        this.name = name;
        this.code = code; // link to Github source code
    }
    display() {
        return (
            <div classname="Project-container">

            </div>
        );
    }
}

export const projects = {
    perceptron: new projectContainer(
        "Multi-Layer Perceptron",
        ""
    ),
    transformer: new projectContainer(
        "Transformer",
        ""
    )
};
