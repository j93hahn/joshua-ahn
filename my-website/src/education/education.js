import './education.css';


class Course {
    constructor(title, professors, number) {
        this.title = title;
        this.professors = professors;
        this.number = number;
    }
    display() {
        return (
            <div className="Course">

            </div>
        );
    }
};


class Position {
    constructor(title, professors, number, position, term) {
        this.title = title;
        this.professors = professors;
        this.number = number;
        this.position = position;
        this.term = term;
    }
    display() {
        return (
            <div>

            </div>
        );
    }
};


class Activity {
    constructor(name, start, end, position, description, src) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.position = position;
        this.description = description;
        this.src = src;
    }
    display() {
        return (
            <img src={this.src} className="Activity" alt={this.name} />
        );
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
        151: new Course(
            `Introduction to Computer Science I`,
            `Adam Shaw, Timothy Ng`,
            `CMSC 15100`
        ),
        152: new Course(
            `Introduction to Computer Science II`,
            `Anne Rogers, Hannah Morgan`,
            `CMSC 15200`
        ),
        154: new Course(
            `Introduction to Computer Systems`,
            `Yanjing Li, Junchen Jiang`,
            `CMSC 15400`
        ),
        222: new Course(
            `Computer Architecture`,
            `Yanjing Li`,
            `CMSC 22200`
        ),
        271: new Course(
            `Discrete Mathematics`,
            `Janos Simons, Aaron Potechin`,
            `CMSC 27100`
        ),
        272: new Course(
            `Theory of Algorithms`,
            `Lorenzo Orecchia`,
            `CMSC 27200`
        ),
        297: new Course(
            `Independent Reading and Research`,
            `Greg Shakhnarovich`,
            `CMSC 29700`
        )
    },
    teachingPositions: { // chronologically ordered
        p1: new Position(
            `Computer Architecture for Scientists`,
            `Andrew Chien`,
            `CMSC 22240`,
            `Grader`,
            `Winter 2022`
        ),
        p2: new Position(
            `Introduction to Computer Systems`,
            `Yanjing Li, Junchen Jiang`,
            `CMSC 15400`,
            `Teaching Assistant`,
            `Spring 2022`
        )
    },
    activities: {
        ktp: new Activity(
            `Kappa Theta Pi`,
            `March 2022`,
            `Present`,
            `Member`,
            ``,
            ``
        ),
        frp: new Activity(
            `Food Run Project`,
            `October 2020`,
            `Present`,
            `Co-President, Treasurer`,
            ``,
            ``
        ),
        research: new Activity(
            `Perceptron and Learning Systems Research Group`,
            `December 2021`,
            `Present`,
            `Undergraduate Researcher`,
            ``,
            ``
        ),
        music: new Activity(
            `University Symphony Orchestra`,
            `September 2020`,
            `Present`,
            `Cellist`,
            ``,
            ``
        ),
        mtm: new Activity(
            `Maroon Tutor Match`,
            `September 2020`,
            `Present`,
            `Tutor`,
            ``,
            ``
        ),
        uh: new Activity(
            `Uncommon Hacks`,
            `Spring 2021`,
            `Present`,
            `Member`,
            ``,
            ``
        )
    }
};
