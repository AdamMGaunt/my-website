import * as React from 'react';

import styled from 'styled-components';

const AppHeading = styled.div`
  text-align: center;
  font-family: Nokora, Roboto, Sans-Serif;
  font-weight: 100;
  font-size: 16px;
  color: #000000;
`;

const MyAppbar = styled.div`
  background-color: rgba(255,255,255,0.95);
  box-shadow: 1px 1px 2px rgba(0,0,0,0.15);
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const AppbarLeft = styled.div`

`;
const AppbarRight = styled.div`
  display: flex;
`;

const AppBarButton = styled.div`
  margin: 0 8px;
`;

const ButtonAppBar: React.FC = () => {

  return (
    <MyAppbar>
      <AppbarLeft>
        <AppHeading>
          Blind Munk Studios
        </AppHeading>
      </AppbarLeft>
      <AppbarRight>
        <AppBarButton>
          Focus
        </AppBarButton>
        <AppBarButton>
          Projects
        </AppBarButton>
        <AppBarButton>
          Contact
        </AppBarButton>
      </AppbarRight>
    </MyAppbar>
  );
};
export default ButtonAppBar;
