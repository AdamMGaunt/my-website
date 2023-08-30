import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import { Projects } from "../content/Projects";
import Modal from "./Modal";
import Button from '../components/Button';

const ProjectSection = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  position: relative;
  padding: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;

  }
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
  @media (max-width: 768px) {
    height: auto;
  }
`;

const GridItemContent = styled.div`
  background-color: rgba(0,0,0,0.83);
  color: #ffffff;
  padding: 1rem;
  width: 100%;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`

`;

const ModalImage = styled.div`   
  height: auto;
  padding: 1rem;
  img {    
      width: 50vw;
      @media (max-width: 768px) {
          width: 100%;
      }
  }
`;
const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  width: 100%;
`;

const Divider = styled.div`
  border-right: 1px solid #1e1e1e;
  height: 100%;
`;

type MyProjectT = {
  key: number,
  imagePath: string,
  heading: string,
  subheading: string,
  caption: string,
  description: string
}

const FeatureGrid: React.FC = () => {
  const [ project, setProject ] = useState<MyProjectT>();
  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    setProject(project);
  })

  const onCloseModal = () => {
    setShowModal(false);
  }

  return(
    <>
      {showModal && project &&(
        <Modal onCloseModal={onCloseModal}>
          <ModalContentWrapper>
            <ModalTop>
              <Button onClick={onCloseModal}>close</Button>
            </ModalTop>
            <ModalImage>
              <img width='100%' src={project.imagePath} />
            </ModalImage>
            <ModalContent>
              <h3>{project.heading}</h3>
              <h4>{project.subheading}</h4>
              <p>{project.caption}</p>
              <p>{project.description}</p>
            </ModalContent>
            <ModalActions>
              <Button onClick={onCloseModal}>prev</Button>
              <Divider/>
              <Button onClick={onCloseModal}>next</Button>
            </ModalActions>
          </ModalContentWrapper>
        </Modal>
      )}
      <ProjectSection>
        <h1>Projects</h1>
        <MyGrid>
          {Projects.map((ProjectFeature) => {
            const { key, imagePath, heading, subheading, caption } = ProjectFeature;
            return (
              <GridItem key={key} onClick={() => {
                setProject(ProjectFeature);
                setShowModal(true);
              }}
              style={{
                backgroundImage: `url(${imagePath})`
              }}>
                <GridItemContent>
                  <h3>{heading}</h3>
                  <h4>{subheading}</h4>
                  <p>{caption}</p>
                </GridItemContent>
              </GridItem>
            );
          })}
        </MyGrid>
      </ProjectSection>
    </>
  )
}

export default FeatureGrid;