import React from 'react';
import styled from 'styled-components';

// components
import MoreButton from './Button';
import { Card } from './layout'
import CardImage from './image';

const CardHeader = styled.h2`
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

const MyCard: React.FC = (cardContent:any) => {
    return (
        <Card>
            <CardHeader>
                {cardContent.heading}
            </CardHeader>
            <CardBody>
                <CardImage path={cardContent.imagePath} />
                <p>{cardContent.subheading}</p>
                <p>{cardContent.caption}</p>
            </CardBody>
            <CardActions>
                <MoreButton name='more' variant="contained" />
            </CardActions>
        </Card>
    );
}

export default MyCard