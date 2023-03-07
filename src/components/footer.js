import React, {Component } from 'react';
import styled from 'styled-components';

const MyFooter = styled.div`
  display: grid;
  justify-content: center;
  background-color: #282c34;
`;
const FooterColumn = styled.div`
  padding: 1rem;
  text-align: center;
  color: #ffffff;
  font-size: 0.6em;
`;

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
          <MyFooter>
              <FooterColumn>
                <h5>Designed & Developed</h5>
                <p>Copyright Blind Munk Studios 2023</p>
              </FooterColumn>
          </MyFooter>
        );
      }
    }
  }

  export default Footer
