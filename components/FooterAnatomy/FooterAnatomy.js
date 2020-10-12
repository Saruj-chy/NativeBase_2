import { Button, Container, Content, Footer, FooterTab, Header, Text, View } from 'native-base';
import React from 'react';

const FooterAnatomy = () => {
  return (
    <View>

      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </View>
  );
};

export default FooterAnatomy;