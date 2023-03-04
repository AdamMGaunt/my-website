import React, {Component } from 'react';
import MyCard from './card';

class Block extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        items: [],
        cardContent: [("content block 1"),("content block 2"),("content block 3") ]
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
                <MyCard heading="Card 1" cardContent={this.state.cardContent[0]} />
                <MyCard heading="Card 2" cardContent={this.state.cardContent[1]} />
                <MyCard heading="Card 3" cardContent={this.state.cardContent[2]} />
            </div>
        );
      }
    }
  }

  export default Block
