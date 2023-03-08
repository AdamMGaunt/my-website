import React, {Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

import { CallToAction } from '../content/Projects';

const StyledCTA = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: #F2C94C;
    color: #fff;
    border-radius: 8px;
`;

const CTAHeading = styled.h2`
    width: 100%;
    text-align: center;
`;
const CTABody = styled.div`
    width: 100%;
    text-align: center;
`;
const CTAButton = styled.div`
    width: max-content;
    padding: 1rem;
`;

export default function getCTA() {
    return (
        <StyledCTA>
            <CTAHeading>{CallToAction.heading}</CTAHeading>
            <CTABody>{CallToAction.body}</CTABody>
            <CTAButton>
                <Button name='Contact' variant="contained" />
            </CTAButton>
        </StyledCTA>
    )
}