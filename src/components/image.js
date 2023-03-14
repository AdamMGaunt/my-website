import { Component } from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    Justify-content: center;
`;

export default function CardImage( { path } ) {
    return (
        <StyledImage>
            <img width='100%' src={path} />
        </StyledImage>
    )
};