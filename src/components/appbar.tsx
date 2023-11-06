import * as React from 'react';

import styled from 'styled-components';

const AppHeading = styled.div`
  text-align: center;
  font-family: Nokora, Roboto, Sans-Serif;
  font-weight: 100;
  font-size: 16px;
  color: #000000;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const MyAppbar = styled.div`
  background-color: rgba(255,255,255,0.95);
  box-shadow: 1px 1px 2px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 16px;
  position: sticky;
  top: 0;
  z-index: 999;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const AppbarLeft = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
const AppbarRight = styled.div`
  display: flex;
`;

const AppBarButton = styled.div`
  margin: 0 8px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ButtonAppBar: React.FC = () => {

  return (
    <MyAppbar>
      <AppbarLeft>
        <AppHeading>
          <a href="/">
            Blind Munk Studios
          </a>
        </AppHeading>
      </AppbarLeft>
      <AppbarRight>
      <AppBarButton>
          <a href="#About">
            About
          </a>
        </AppBarButton>
        <AppBarButton>
          <a href="#Projects">
            Projects
          </a>
        </AppBarButton>
        <AppBarButton>
        <a href="#Methodology">
            Methodology
          </a>
        </AppBarButton>
        <AppBarButton>
        <a href="#Contact">
            Contact
          </a>
        </AppBarButton>
      </AppbarRight>
    </MyAppbar>
  );
};
export default ButtonAppBar;
