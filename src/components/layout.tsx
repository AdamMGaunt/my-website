import styled from 'styled-components';
import { Images } from '../content/Projects';

// Constants

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    margin-top: 80px;
    margin-bottom: 80px;
`;

export const HeroSection = styled.div`
    min-height: 300px;
    background-image: url(${Images.BackgroundImage});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: calc(100Vh - 72px);
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
        height: calc(100Vh - 72px);
    }
`;

export const HeroTitle = styled.h1`
    text-align: center;
    z-index: 9;
`;
export const HeroSubheading = styled.h4`
    text-align: center;
    z-index: 9;
`;

export const Section = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    margin: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.25rem;
    box-shadow: 2px 3px 6px rgba(0,0,0,0.125);
`;

export const Title = styled.h1 `
    background-color: #ffffff;
    text-align: center;
`;

export const CenterSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;
    
export const CenterSectionBody = styled.div`
    margin: 3rem;
    max-width: 75vw;
    @media (max-width: 768px) {
        max-width: 100vw;
        margin: 0;
      }
`;

export const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const LeftSectionBody = styled.div`
    margin-left: 3rem;
    margin-right: 3rem;
`;

export const DividerHorizontal = styled.div`
  border-bottom: 1px solid #d4d4d4;
  width: 100%;
`;

export const DividerHorizontalDark = styled.div`
  border-bottom: 1px solid #efefef;
  width: 100%;
`;

export const DividerVertical = styled.div`
  border-right: 1px solid #d4d4d4;
  height: 100%;
`;

export const ContentHeader = styled.div`
    margin-top: 80px;
    padding: 0.5rem 1rem;
    h2 {
        padding: 0 1rem;
    }
`;