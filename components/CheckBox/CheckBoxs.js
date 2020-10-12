// import { Button } from 'react-native';
import React from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';


const CheckBoxs = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Discussion with Client</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={true} color="green" />
          <Body>
            <Text>Finish list Screen</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  );
};

export default CheckBoxs;