import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge } from 'native-base';


const TabsFooter = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer>
        <FooterTab>
          <Button active>
            <Text>Apps</Text>
          </Button>
          <Button active>
            <Text>Camera</Text>
          </Button>
          <Button active badge vertical>
            <Badge ><Text>51</Text></Badge>
            <Text>Navigate</Text>
          </Button>
          <Button active>
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default TabsFooter;