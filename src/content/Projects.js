
// type ProjectT = {
//     heading: String;
//     subheading: String;
//     bodyContent: String;
// };
// type CardContentT = {
//     projects: ProjectT[];
// }

export const Projects = [
    {
        heading: 'Project 1',
        subheading: 'React',
        bodyContent: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imagePath: 'my-website/src/images/logo192.png'
    },
    {
        heading: 'Project 2',
        subheading: 'React',
        bodyContent: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imagePath: './my-website/src/images/logo192.png'
    },
    {
        heading: 'Project 3',
        subheading: 'React',
        bodyContent: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        imagePath: './images/logo192.png'
    }
];

export const CallToAction = {
    heading: 'This is a CTA',
    body: 'This is the body of the CTA',
    button: 'I am a Button'
}

export default {Projects, CallToAction};