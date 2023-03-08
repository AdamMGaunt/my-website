import React, {Component } from 'react';
import styled from 'styled-components';

// components
import MoreButton from './Button';
import { Card } from '../components/layout'
// import CardImage from './image';

const CardHeader = styled.h1`
    background-color: white;
    text-align: center;
`;
const CardBody = styled.div`
    padding: 1rem;
    text-align: center;
`;
const CardActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: center;
`;

const StyledImage = styled.div`
    width: 100px;
    height: 100px;
`;

class MyCard extends React.Component {
  
    render() {
        return (
            <Card>
                <CardHeader>
                    {this.props.content.heading}
                </CardHeader>
                <CardBody>
                    <StyledImage>
                        <img width='100px' height='100px' src={this.props.content.imagePath} />
                    </StyledImage>
                    <p>{this.props.content.subheading}</p>
                    <p>{this.props.content.bodyContent}</p>
                </CardBody>
                <CardActions>
                    <MoreButton name='more' variant="contained" />
                </CardActions>
            </Card>
        );
    }
}

export default MyCard