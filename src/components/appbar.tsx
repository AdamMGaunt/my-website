import * as React from 'react';

import styled from 'styled-components';

const AppHeading = styled.div`
  text-align: center;
  font-family: Nokora, Roboto, Sans-Serif;
  color: #ffffff;
`;

const MyAppbar = styled.div`
  background-color: #56CCF2;
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
`;
const AppbarLeft = styled.div`

`;
const AppbarRight = styled.div`
  display: flex;
`;

const AppBarButton = styled.div`
  margin: 0 8px;
  color: #ffffff;
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
