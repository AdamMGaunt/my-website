
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
    subheading: 'User Expereince Design & User Interface Development'
}

export const Images = {
    UX_IMAGE: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/uxdesign.jpg',
    UI_IMAGE: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/application.jpg',
    BackgroundImage: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/WebsiteBackground.png'
}

export const UXContent = {
    sectionTitle: 'UX Design',
    introduction: 'The UX (User Experience) design process I follow is a framework that designers use to create products that are useful, usable, and desirable for their users. The process typically consists of several phases, each with its own set of activities, and it can vary slightly depending on the specific project, team, or company.',
    feature: [
        {
            key: 1,
            title: 'Research',
            body: "The first step is to understand the user's needs, behaviors, and motivations. This can involve conducting user interviews, surveys, and other forms of user research"
        },
        {
            key: 2,
            title: 'Analysis',
            body: "Based on the research, the designer analyzes the data to identify patterns and insights that can inform the design."
        },
        {
            key: 3,
            title: "Ideation",
            body: "This phase involves brainstorming and generating ideas for the product design. This can be done through sketching, wireframing, and prototyping."
        },
        {
            key: 4,
            title: "Design",
            body: "The design phase involves creating a detailed design for the product. This can include visual design, interaction design, and information architecture."
        },
        {
            key: 5,
            title: "Testing",
            body: "In this phase, the designer tests the design with real users to see how they interact with it and identify any usability issues."
        },
        {
            key: 6,
            title: "Iteration",
            body: "Based on the feedback from testing, the designer makes changes and refines the design. This process may go through several iterations until the design meets the user's needs."
        },
        {
            key: 7,
            title: "Implementation",
            body: "Once the design is finalized, it can be implemented in the product. This may involve working with developers to ensure that the design is properly implemented."
        },
        {
            key: 8,
            title: "Launch",
            body: "Finally, the product is launched to the public, and the designer monitors its performance and gathers feedback for future improvements."
        }
    ],
    conclusion: 'The UX design process is a cyclical process that involves constant iteration and improvement based on user feedback. By following this process, designers can create products that are both effective and enjoyable for their users.'
}

export const UIContent = {
    sectionTitle: 'UI Development',
    introduction: 'UI (User Interface) development is the process of creating the visual and interactive elements of a digital product, such as a website or mobile app, that users interact with.',
    feature: [
        {
            key: 1,
            title: 'Design',
            body: "The first step in UI development is to create a design that meets the product's requirements and user needs. This may involve creating wireframes, mockups, and high-fidelity designs using tools such as Sketch, Adobe XD, or Figma."
        },
        {
            key: 2,
            title: 'Front-end development',
            body: "Once the design is finalized, the front-end development process begins. This involves coding the visual and interactive elements of the product using HTML, CSS, and JavaScript. Front-end developers may use frameworks and libraries such as React, Vue, or Angular to speed up the development process."
        },
        {
            key: 3,
            title: 'Testing',
            body: "After the front-end development is complete, the product is tested to ensure that it functions as intended and is compatible with different devices and browsers. Testing may involve manual testing, automated testing, or both."
        },
        {
            key: 4,
            title: 'Deployment',
            body: "Once testing is complete, the product is deployed to a live environment where it can be accessed by users. Deployment may involve setting up servers, configuring databases, and other tasks."
        },
        {
            key: 5,
            title: 'Maintenance',
            body: "After deployment, the UI development process may still require ongoing maintenance to ensure that the product remains up-to-date, secure, and performs well."
        }
    ],
    conclusion: "UI development is an essential part of creating a digital product that is both functional and visually appealing. By following a structured development process, UI developers can create products that meet user needs and business requirements."
}

export const Projects = [
    {
        key: 1,    
        heading: 'Logistics Management Web Application',
        subheading: 'UX Design & UI Development',
        caption: "Figma, ACS, Blazor, Typescript, Azure DevOPS",
        description: "The Bulk Commodity Logistics Management Application streamlines the transport, storage, and handling of large-scale commodities. Tailored for industries dealing in high-volume goods like grains, minerals, and coal, this tool offers real-time tracking, inventory management, and route optimization. Integrating advanced analytics and intuitive dashboards, it ensures timely deliveries, minimizes operational costs, and enhances the efficiency of the entire commodity supply chain.",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/logistics.jpg'
    },
    {
        key: 2,
        heading: 'Pipeline Triage Application',
        subheading: 'UI Development',
        caption: "Angular, Typescript, Azure DevOPS",
        description: "The Pipeline Triage Application is a specialized tool designed to monitor, diagnose, and manage the health of oil pipelines. Through a user-friendly interface, it provides real-time insights into pipeline performance, detects potential disruptions, and assists in swift issue resolution. Combining advanced sensor data with analytical capabilities, it ensures the efficient and safe operation of critical oil transport infrastructure, minimizing environmental and operational risks.",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/security.jpg'
    },
    {
        key: 3,
        heading: 'Pipeline Flow Management Application',
        subheading: 'UX Design',
        caption: "Figma, ACS, React",
        description: "The Pipeline Flow Management Application is an advanced solution crafted for overseeing and optimizing fluid flow within pipelines. Suitable for industries like oil, gas, or water distribution, it offers real-time monitoring, pressure control, and leakage detection. Through its intuitive interface, users gain deep insights into flow rates, volume, and potential disruptions, ensuring safety, efficiency, and continuity in critical pipeline operations.",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/monitoring.jpg'
    },
    {
        key: 4,
        heading: 'Internal Logistics Management Software Assessment Roadmap',
        subheading: 'UX Design, Business Analysis',
        caption: "User Journey, UX Mapping, Application Analysis",
        description: "The Internal Logistics Management Software Assessment Roadmap is a strategic guide designed to evaluate, streamline, and enhance in-house logistics software systems. By addressing critical touchpoints such as workflow efficiency, system integrations, and user experience, this roadmap plots a clear path for organizations to identify gaps, implement improvements, and achieve optimized logistical operations, driving both performance and profitability.",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/monitoring.jpg'
    },
    {
        key: 5,
        heading: 'Railway Fleet Management Power App',
        subheading: 'UX Design',
        caption: "Figma, ACS, React",
        description: "The Railway Fleet Management Power App is a dynamic and comprehensive solution tailored for the efficient management of railway rolling stock. Leveraging the power of modern digital tools, it provides real-time insights into the status, location, and health of each vehicle within a fleet. From locomotives to passenger cars and freight wagons, this app ensures timely maintenance, route optimization, and operational coordination. Its intuitive interface paired with powerful analytics makes it an indispensable tool for modern railway operations, promoting safety, punctuality, and cost-effective fleet management.",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/monitoring.jpg'
    },
    {
        key: 6,
        heading: 'Interactive Touchscreen Interface',
        subheading: 'UX Design, UI development, Lead Developer',
        caption: "Figma, React, Typescript",
        description: "The Interactive Touchscreen Interface for Virtual Reception revolutionizes the visitor experience by combining state-of-the-art technology with user-centric design. Upon arrival, guests are greeted by a sleek, high-resolution display that seamlessly guides them through their check-in process. Features include facial recognition for swift identification, a virtual assistant with voice and gesture recognition for queries, and a dynamic directory for easy navigation. Integrated with real-time notifications, it promptly alerts the respective personnel of a visitor's arrival. Whether for an office, hotel, or event space, this interface streamlines visitor management, elevates brand presentation, and ensures every guest feels both welcomed and empowered.",
        imagePath: 'https://blindmunkstudios.s3.us-west-2.amazonaws.com/monitoring.jpg'
    }
];


export const CallToAction = {
    heading: 'Interested?',
    body: 'let me know what you think',
    button: 'Contact me'
}