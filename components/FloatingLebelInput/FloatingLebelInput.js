import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


const FloatingLebelInput = () => {
  return (
    <Container style={{ backgroundColor: 'orange', margin: 20 }}>
      <Header />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default FloatingLebelInput;