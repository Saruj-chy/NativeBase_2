import { Container, Content, Footer, Text, Header } from 'native-base';
import React from 'react';

const ContentExample = () => {
  return (
    <Container>
      <Header />
      <Content padder>
        <Text>
          This is Content Section
          </Text>
      </Content>
      <Footer />
    </Container>
  );
};

export default ContentExample;