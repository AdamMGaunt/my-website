import * as React from "react";
import styled from "styled-components";

import { Projects } from "../content/Projects";
import { url } from "inspector";

const MyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  position: relative;
  padding: 32px;
`;

const GridItem = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(255,255,255,0.83);
  box-shadow: 1px 1px 2px rgba(0,0,0,0.54);
`;

const GridItemContent = styled.div`
  background-color: rgba(0,0,0,0.83);
  color: #ffffff;
  padding: 1rem;
  width: 100%;
`;

const FeatureGrid: React.FC = () => {
  return(
    <>
      <MyGrid>
        {Projects.map((ProjectFeature) =>
          <GridItem key={ProjectFeature.key} style={{
            backgroundImage: `url(${ProjectFeature.imagePath})`
          }}>
            <GridItemContent>
              <h3>{ProjectFeature.heading}</h3>
              <h4>{ProjectFeature.subheading}</h4>
              <p>{ProjectFeature.caption}</p>
            </GridItemContent>
          </GridItem>
        )
        }
      </MyGrid>
    </>
  )
}

export default FeatureGrid;