import React, {Component } from 'react';
import styled from 'styled-components';

const MySection = styled.div `
    margin-top: 3rem;
    margin-bottom: 3rem;
`;
export const Section: React.FC<{ text: string }> = ({ text }) => {
    return (
        <MySection>
            {text}
        </MySection>
    )
}

class Section extends React.Component {
    render () {
        return (
            <MySection>
                <div></div>
            </MySection>
        )
    }
};
export default Section