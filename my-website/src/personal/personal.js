import linkedin from './svg/linkedin.svg';
import github from './svg/github.svg';
import instagram from './svg/instagram.svg';
import facebook from './svg/facebook.svg';
import './personal.css';


class SocialMedia { // object for social media pages
    constructor(name, link, logo, alt) {
        this.name = name;
        this.link = link;
        this.logo = logo;
        this.alt = alt;
    };
    display() {
        return (
            <a href={this.link} target="_blank" rel="noopener noreferrer">
                <img src={this.logo} className="Social-media" alt={this.alt} />
            </a>
        );
    };
};


export const socials = {
    linkedIn: new SocialMedia(
        "LinkedIn",
        "https://www.linkedin.com/in/joshua-ahn-uchicago/",
        linkedin,
        "LinkedIn Profile"
    ),
    github: new SocialMedia(
        "GitHub",
        "https://github.com/j93hahn",
        github,
        "Github Profile"
    ),
    instagram: new SocialMedia(
        "Instagram",
        "https://www.instagram.com/_joshuaahn/",
        instagram,
        "Instagram profile"
    ),
    facebook: new SocialMedia(
        "Facebook",
        "https://www.facebook.com/j93hahn/",
        facebook,
        "Facebook Profile"
    )
};


export const contact = { // contact information
    email: "jjahn@uchicago.edu",
    emailAlt: "joshuajahn2001@gmail.com"
};


export function aboutMe() {
    const status = "rising"; // "current"
    const year = "third-year"; // "fourth-year"
    const intro = `Hi there! My name is Joshua Ahn and I am a ${status}
    ${year} at the University of Chicago. I am majoring in computer science and
    am broadly interested in the fields of machine learning/AI, with a focus on
    computer vision.`;

    return (
        <div className="About-me">
            {intro}
        </div>
    );
};
