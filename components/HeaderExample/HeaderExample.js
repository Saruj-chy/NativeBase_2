import React from 'react';
import { Body, Button, Container, Icon, Left, Right, Title, Header } from 'native-base';


const HeaderExample = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    </Container>
  );
};

export default HeaderExample;