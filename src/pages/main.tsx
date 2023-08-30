import * as React from 'react';
import styled from 'styled-components';

import { Images } from '../content/Projects'

import {  
    ContentContainer, 
    CenterSection, 
    CenterSectionBody, 
} from '../components/layout';

// Content
import { UXContent, UIContent } from '../content/Projects';

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

const ContentContainerLight = styled.div`
    margin: 5rem;
    text-align: center;
    position: relative;
    z-index: 9;
    @media (max-width: 768px) {
        margin: 1rem;
      }
`;

const ContentContainerDark = styled.div`
    color: #ffffff;
    position: relative;
    overflow: hidden;
    padding-top: 10rem;
`;
    
const RotatedContainer = styled.div`
    background-color: rgba(0,0,0,0.87);
    height: 100%;
    width: 150vw;
    position: absolute;
    z-index: 0;
`;

const ContentDark = styled.div`
    position: relative;
    z-index: 9;
`;

const FeatureList = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const FeatureItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    margin: 1rem;
    z-index: 1;
`;

const FeatureHeading = styled.div`
    text-align: center;
    z-index: 1;
`;

const FeatureBody = styled.div`
    text-align: center;
    max-width: 500px;
    z-index: 1;
`;

const MainPage: React.FC = () => {
    return (
        <>
            <ContentContainerLight>
                <h1>Methodology</h1>
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
                                    <FeatureItem key={featureItem.key}>
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
            </ContentContainerLight>
            <ContentContainerDark>
                <RotatedContainer />
                <ContentDark>
                    <ContentContainer>
                        <CenterSection>
                            <StyledImage>
                                <img width='100%' src={Images.UI_IMAGE} />
                            </StyledImage>
                            <CenterSectionBody>
                                <h2>{UIContent.sectionTitle}</h2>
                                <p>{UIContent.introduction}</p>
                                <FeatureList>
                                    { UIContent.feature.map((featureItem) =>
                                        <FeatureItem key={featureItem.key}>
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
                                <p>{UIContent.conclusion}</p>
                            </CenterSectionBody>
                        </CenterSection>
                    </ContentContainer>
                </ContentDark>
            </ContentContainerDark>
        </>
        )
};
export default MainPage;