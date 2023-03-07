import React, {Component } from 'react';
import styled from 'styled-components';

const CallToAction = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 0.0rem;
`;

export default function CTA( {ctaContent} ) {
    return (
        <CallToAction>
            {ctaContent}
        </CallToAction>
    )
}