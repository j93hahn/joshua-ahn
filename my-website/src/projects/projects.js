import './projects.css';


class ProjectContainer { // object for project displays
    constructor(name, code, description, visual) {
        this.name = name;
        this.code = code; // link to Github source code
        this.description = description;
        this.visual = visual;
    }
    display() {
        return (
            <div classname="Project-container">

            </div>
        );
    }
};


export const projects = {
    perceptron: new ProjectContainer(
        "Multi-Layer Perceptron",
        "",
        "",
        ""
    ),
    transformer: new ProjectContainer(
        "Transformer",
        "",
        "",
        ""
    ),
    cpu: new ProjectContainer(
        "Microprocessor Simulation",
        "",
        "",
        ""
    )
};
