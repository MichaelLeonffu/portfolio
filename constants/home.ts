import IHomeData from '../types/home-data'

const HomeData: IHomeData = {
    hero: {
        pretext: "Hi! My name is",
        name: "Michael Leonffu",
        subname: "I program cool things!",
        subtext: "I'm a software engineer with a passion in building Web Applications and backend infrastructure. I'm working on several personal projects to sharpen my skills. Check them out here:",
    },
    about: {
        body: [
            "Hi! My name is Michael Leonffu and I like to program things!",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sapiente dolor sed exercitatnem earum quaerat pariatur mollitia. Repellendus ullam enim adipisci sapiente magni molestias? Nemo quidem nostrum debitis sint nulla.",
            "Lorem ipm dolor sit amet consectetur, adipisicing elit. Non sapiente dolor sed exercitationem earum quaerat pariatur mollitia. Repellendus ullam enim adipisci sapiente magni molestias? Nemo quidem nostrum debitis sint nulla.",
        ],
    },
    experience: [
        {
            jobTitle: "Embedded Systems Engineer Intern",
            date: {
                start: "May 2019",
                end: "September 2019",
            },
            description: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deserunt placeat neque rellat.",
                "Lorem ipsum, dolor sit amet consectetur adipicing elit. Corporis deserunt placeat neque repellat.",
                "Lorem ips, dolor sit amet consectetur adipisicing elit. Corporis deserunt placeat neque repellat.",
            ],
            company: {
                name: "Palomar Scientific Instruments",
                location: "San Marcos, CA",
                url: "http://palomarsci.com",
            },
        },
        {
            jobTitle: "Backend Developer Intern",
            date: {
                start: "June 2017",
                end: "August 2017",
            },
            description: [
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis deserunt placeat neque rellat.",
                "Lorem ipsum, dolor sit amet consectetur adipising elit. Corporis deserunt placeat neque repellat.",
                "Lorem ipsum, dolor sit amet consectetur adipicing elit. Corporis deserunt placeat neque repellat.",
            ],
            company: {
                name: "Nordson Asymtek",
                location: "Carlsbad, CA",
                url: "https://www.nordson.com/en/divisions/asymtek",
            },
        },
    ],
    project: [
        {
            url: "https://github.com/MichaelLeonffu",
            title: "Badminton Birdy Serving Robot",
            subtitle: "UCLA Capstone Project",
            content: "Made a cool robot thing!",
            topics: [
                "C/C++",
                "Linux",
            ]
        },
        {
            url: "https://github.com/MichaelLeonffu",
            title: "JuicyData Web Application",
            subtitle: "Logistics/Analytics Service for FIRST FTC Robotics",
            content: "Created a web app to organize robotics events in the San Diego region serving 70+ teams and 2000+ users.",
            topics: [
                "Backend Architect",
                "System Admin",
            ]
        },
    ],
    skill: [
        {
            title: "Photography",
            content: "I like to take photos.",
        },
    ]
}

export default HomeData;