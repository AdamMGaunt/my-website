import React from 'react';

import MyCard from './card';
import { Container, Section } from './layout';

const Block: React.FC = (content:any) => {
  
  return (
      <Container>
              <Section>
                <MyCard cardContent={content} />
              </Section>
      </Container>
  );
}

export default Block
