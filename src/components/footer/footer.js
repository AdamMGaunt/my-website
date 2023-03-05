import React, {Component } from 'react';

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        items: []
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
          <footer>
              <div class="column">
                <h5>Designed & Developed</h5>
                <p>Copyright Blind Munk Studios 2023</p>
              </div>
          </footer>
        );
      }
    }
  }

  export default Footer
