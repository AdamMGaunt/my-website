import * as React from 'react';
import styled from 'styled-components';

import { Images } from '../content/Projects'

import {  
    ContentContainer, 
    CenterSection, 
    CenterSectionBody, 
} from '../components/layout';

// Content
import { UXContent } from '../content/Projects';

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

const FeatureList = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FeatureItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    margin: 1rem;
`;

const FeatureHeading = styled.div`
    text-align: center;
`;

const FeatureBody = styled.div`
    text-align: center;
    max-width: 500px;
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
                        <h2>{UXContent.sectionTitle}</h2>
                        <p>{UXContent.introduction}</p>
                        <FeatureList>
                            { UXContent.feature.map((featureItem) =>
                                <FeatureItem>
                                    <FeatureHeading>
                                        <h3>{featureItem.title}</h3>
                                    </FeatureHeading>
                                <FeatureBody>
                                    {featureItem.body}
                                </FeatureBody>
                            </FeatureItem>
                            )
                        }
                        </FeatureList>
                        <p>{UXContent.conclusion}</p>
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