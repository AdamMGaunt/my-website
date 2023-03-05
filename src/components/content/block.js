import React, {Component } from 'react';
import MyCard from './card';

// add content here
const Projects = [
  {
    heading: 'Project 1',
    subheading: 'subheading',
    bodyContent: 'this is the body content'
  },
  {
    heading: 'Project 2',
    subheading: 'subheading',
    bodyContent: 'this is the body content'
  },
  {
    heading: 'Project 3',
    subheading: 'subheading',
    bodyContent: 'this is the body content'
  }
];

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
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div className="container">
                <MyCard heading={this.state.cardContent[0].heading} cardContent={this.state.cardContent[0].bodyContent} />
                <MyCard heading={this.state.cardContent[0].heading} cardContent={this.state.cardContent[1].bodyContent} />
                <MyCard heading={this.state.cardContent[0].heading} cardContent={this.state.cardContent[2].bodyContent} />
            </div>
        );
      }
    }
  }

  export default Block
