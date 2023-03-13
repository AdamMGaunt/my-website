import React from 'react';
import styled from 'styled-components';

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
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroTitle = styled.h1`
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