
type ProjectT = {
    heading: String;
    subheading: String;
    caption: String;
    imagePath: String;
};
type CardContentT = {
    projects: ProjectT[];
}

export const HeroContent = {
    name: 'Blind Munk Studios',
    subheading: 'Focus'
}

export const Images = {
    UX_IMAGE: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/uxdesign.jpg',
    UI_IMAGE: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/application.jpg',
    BackgroundImage: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/WebsiteBackground.png'
}

export const UXContent = {
    sectionTitle: 'UX Design',
    introduction: 'he UX (User Experience) design process I follow is a framework that designers use to create products that are useful, usable, and desirable for their users. The process typically consists of several phases, each with its own set of activities, and it can vary slightly depending on the specific project, team, or company.',
    feature: [
        {
            title: 'Research',
            body: "The first step is to understand the user's needs, behaviors, and motivations. This can involve conducting user interviews, surveys, and other forms of user research"
        },
        {
            title: 'Analysis',
            body: "Based on the research, the designer analyzes the data to identify patterns and insights that can inform the design."
        },
        {
            title: "Ideation",
            body: "This phase involves brainstorming and generating ideas for the product design. This can be done through sketching, wireframing, and prototyping."
        },
        {
            title: "Design",
            body: "The design phase involves creating a detailed design for the product. This can include visual design, interaction design, and information architecture."
        },
        {
            title: "Testing",
            body: "In this phase, the designer tests the design with real users to see how they interact with it and identify any usability issues."
        },
        {
            title: "Iteration",
            body: "Based on the feedback from testing, the designer makes changes and refines the design. This process may go through several iterations until the design meets the user's needs."
        },
        {
            title: "Implementation",
            body: "Once the design is finalized, it can be implemented in the product. This may involve working with developers to ensure that the design is properly implemented."
        },
        {
            title: "Launch",
            body: "Finally, the product is launched to the public, and the designer monitors its performance and gathers feedback for future improvements."
        }
    ],
    conclusion: 'The UX design process is a cyclical process that involves constant iteration and improvement based on user feedback. By following this process, designers can create products that are both effective and enjoyable for their users.'
}


export const Projects = [
    {
        heading: 'Logistics Management Web Application',
        subheading: 'UX Design & UI Development',
        caption: "Figma, ACS, Blazor, Typescript, Azure DevOPS",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/logistics.jpg'
    },
    {
        heading: 'Pipeline Triage Application',
        subheading: 'UI Development',
        caption: "Angular, Typescript, Azure DevOPS",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/security.jpg'
    },
    {
        heading: 'Pipeline Flow Management Application',
        subheading: 'UX Design',
        caption: "Figma, ACS, React",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/monitoring.jpg'
    }
];

export const CallToAction = {
    heading: 'Interested?',
    body: 'let me know what you think',
    button: 'Contact me'
}