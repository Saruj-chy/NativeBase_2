import React, { useState } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { Image } from 'react-native';
import logo1 from '../../images/attend.png'
import logo2 from '../../images/email.png'
import logo3 from '../../images/erbis.png'


const fabs = () => {

  const [active, setActive] = useState(false);

  return (
    <Container>
      <Header />
      <View style={{ flex: 1 }}>
        <Fab
          active={active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => setActive(!active)}>
          <Image source={logo1} style={{ width: 40, height: 40 }}></Image>
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Image source={logo2} style={{ width: 40, height: 40 }}></Image>
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </View>
    </Container>
  );
};

export default fabs;