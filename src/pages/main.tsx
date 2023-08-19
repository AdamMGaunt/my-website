import * as React from 'react';
import styled from 'styled-components';

import { Images } from '../content/Projects'

import {  
    ContentContainer, 
    CenterSection, 
    CenterSectionBody, 
} from '../components/layout';

const StyledImage = styled.div`
    width: 100%;    
    height: auto;
    padding: 1rem;
    img {    
        width: 50vw;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

const StyledOrderedList = styled.ol`
    text-align: left;
`;

const MainPage: React.FC = () => {
    return (
        <>
            <ContentContainer>
                <CenterSection>
                    <StyledImage>
                        <img width='100%' src={Images.UX_IMAGE} />
                    </StyledImage>
                    <CenterSectionBody>
                        <h3>UX Design</h3>
                        <p>The UX (User Experience) design process I follow is a framework that designers use to create products that are useful, usable, and desirable for their users. The process typically consists of several phases, each with its own set of activities, and it can vary slightly depending on the specific project, team, or company.</p>
                        <StyledOrderedList>
                            <li>Research: The first step is to understand the user's needs, behaviors, and motivations. This can involve conducting user interviews, surveys, and other forms of user research.</li>
                            <li>Analysis: Based on the research, the designer analyzes the data to identify patterns and insights that can inform the design.</li>
                            <li>Ideation: This phase involves brainstorming and generating ideas for the product design. This can be done through sketching, wireframing, and prototyping.</li>
                            <li>Design: The design phase involves creating a detailed design for the product. This can include visual design, interaction design, and information architecture.</li>
                            <li>Testing: In this phase, the designer tests the design with real users to see how they interact with it and identify any usability issues.</li>
                            <li>Iteration: Based on the feedback from testing, the designer makes changes and refines the design. This process may go through several iterations until the design meets the user's needs.</li>
                            <li>Implementation: Once the design is finalized, it can be implemented in the product. This may involve working with developers to ensure that the design is properly implemented.</li>
                            <li>Launch: Finally, the product is launched to the public, and the designer monitors its performance and gathers feedback for future improvements.</li>
                        </StyledOrderedList>
                        <p>The UX design process is a cyclical process that involves constant iteration and improvement based on user feedback. By following this process, designers can create products that are both effective and enjoyable for their users.</p>
                    </CenterSectionBody>
                </CenterSection>
            </ContentContainer>
            <ContentContainer>
                <CenterSection>
                    <StyledImage>
                        <img width='100%' src={Images.UI_IMAGE} />
                    </StyledImage>
                    <CenterSectionBody>
                        <h3>UI Development</h3>
                        <p>UI (User Interface) development is the process of creating the visual and interactive elements of a digital product, such as a website or mobile app, that users interact with. </p>
                        <StyledOrderedList>
                            <li>Design: The first step in UI development is to create a design that meets the product's requirements and user needs. This may involve creating wireframes, mockups, and high-fidelity designs using tools such as Sketch, Adobe XD, or Figma.</li>
                            <li>Front-end development: Once the design is finalized, the front-end development process begins. This involves coding the visual and interactive elements of the product using HTML, CSS, and JavaScript. Front-end developers may use frameworks and libraries such as React, Vue, or Angular to speed up the development process.</li>
                            <li>Testing: After the front-end development is complete, the product is tested to ensure that it functions as intended and is compatible with different devices and browsers. Testing may involve manual testing, automated testing, or both.</li>
                            <li>Deployment: Once testing is complete, the product is deployed to a live environment where it can be accessed by users. Deployment may involve setting up servers, configuring databases, and other tasks.</li>
                            <li>Maintenance: After deployment, the UI development process may still require ongoing maintenance to ensure that the product remains up-to-date, secure, and performs well.</li>
                        </StyledOrderedList>
                        <p>UI development is an essential part of creating a digital product that is both functional and visually appealing. By following a structured development process, UI developers can create products that meet user needs and business requirements.</p>
                    </CenterSectionBody>
                </CenterSection>
            </ContentContainer>
        </>
        )
};
export default MainPage;