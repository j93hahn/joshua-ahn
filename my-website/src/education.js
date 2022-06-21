import './App.css';

class activity {
    constructor(name, start, end, position, description) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.position = position;
        this.description = description;
    }
};

export const college = {
    overall: {
        school: `The University of Chicago`,
        degree: `Bachelor of Science`,
        program: `Computer Science`,
        specialization: `Machine Learning`,
        graduation: `Class of 2024`
    },
    relevantCoursework: { // intro, systems, theory, electives ordering
        courses: [
            `Introduction to Computer Science I`,
            `Introduction to Computer Science II`,
            `Introduction to Computer Systems`,
            `Computer Architecture`,
            `Discrete Mathematics`,
            `Theory of Algorithms`,
            `Independent Reading and Research`
        ],
        professors: [
            `Adam Shaw, Timothy Ng`,
            `Anne Rogers, Hannah Morgan`,
            `Yanjing Li, Junchen Jiang`,
            `Yanjing Li`,
            `Janos Simons, Aaron Potechin`,
            `Lorenzo Orecchia`,
            `Greg Shakhnarovich`
        ],
        numbers: [
            `CMSC 15100`,
            `CMSC 15200`,
            `CMSC 15400`,
            `CMSC 22200`,
            `CMSC 27100`,
            `CMSC 27200`,
            `CMSC 29700`
        ]
    },
    teachingPositions: { // chronologically ordered
        courses: [
            `Computer Architecture for Scientists`,
            `Introduction to Computer Systems`
        ],
        professors: [
            `Andrew Chien`,
            `Yanjing Li, Junchen Jiang`
        ],
        numbers: [
            `CMSC 22240`,
            `CMSC 15400`
        ],
        positions: [
            `Grader`,
            `Teaching Assistant`
        ],
        terms: [
            `Winter 2022`,
            `Spring 2022`
        ]
    },
    activities: {
        ktp: new activity(
            `Kappa Theta Pi`,
            `March 2022`,
            `Present`,
            `Member`,
            ``
        ),
        frp: new activity(
            `Food Run Project`,
            `October 2020`,
            `Present`,
            `Co-President, Treasurer`,
            ``
        ),
        research: new activity(
            `Perceptron and Learning Systems Research Group`,
            `December 2021`,
            `Present`,
            `Undergraduate Researcher`,
            ``
        ),
        music: new activity(
            `University Symphony Orchestra`,
            `September 2020`,
            `Present`,
            `Cellist`,
            ``
        ),
        mtm: new activity(
            `Maroon Tutor Match`,
            `September 2020`,
            `Present`,
            `Tutor`,
            ``
        ),
        uh: new activity(
            `Uncommon Hacks`,
            `Spring 2021`,
            `Present`,
            `Member`,
            ``
        )
    }
};
