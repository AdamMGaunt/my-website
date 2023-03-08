import { Component } from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
    width: 100px;
    height: 100px;
`;

export default function CardImage( path ) {
    return (
        <StyledImage>
            <img url={path} />
        </StyledImage>
    )
};