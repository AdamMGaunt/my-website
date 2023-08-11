
type ProjectT = {
    heading: String;
    subheading: String;
    caption: String;
    imagePath: String;
};
type CardContentT = {
    projects: ProjectT[];
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