import React, {useState, useMemo } from 'react';
import styled from 'styled-components';

import MyCard from './card';
import { Container, Section } from '../components/layout';

//content
import { Projects } from '../content/Projects';


// add content here
// const Projects = [
//   {
//     heading: 'Project 1',
//     subheading: 'subheading',
//     bodyContent: 'this is the body content'
//   },
//   {
//     heading: 'Project 2',
//     subheading: 'subheading',
//     bodyContent: 'this is the body content'
//   },
//   {
//     heading: 'Project 3',
//     subheading: 'subheading',
//     bodyContent: 'this is the body content'
//   }
// ];

class Block extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        items: [],
        cardContent: Projects
      };
    }
  
    /* componentDidMount() {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    } */
  
    render() {
      const { error, isLoaded, items, cardContent } = this.state;
      // const MyCards = this.state.cardContent.map((project) => 
      //   <MyCard content={project} />
      // );
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <Container>
              <Section>
                {
                  cardContent.map((project) => 
                    <MyCard content={project} />
                  )
                }
              </Section>
            </Container>
        );
      }
    }
  }

  export default Block
