import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadLineShape } from "tsparticles-shape-line";
// import * as lines from "./digitizedlines.jpg";
// import brain from './personal/svg/brain.svg';
import './App.css';


const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
};


const particlesLoaded = (container) => {
    console.log(container);
};


const options = {
    background: {
        color: {
            value: "#000000",
        },
    },
    presets: loadLineShape,
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "bubble"
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            bubble: {
                opacity: 0.5,
                size: 18,
                color: {
                    value: "#ffffff"
                }
            }
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 1,
                max: 5
            },
        },
    },
    /*polygon: {
        draw: {
            enable: true,
            lineColor: "rgba(0,255,255,0.2)",
            lineWidth: 0.5
        },
        move: {
            radius: 1
        },
        position: {
            x: 30,
            y: 30
        },
        inlineArrangement: "equidistant",
        scale: 1,
        type: "inline",
        data: brain,
    },*/
    detectRetina: true,
};


export const particles = (
    <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
    />
);