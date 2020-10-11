import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Toast } from 'native-base';
import { Button } from 'react-native';


const TabsAdvance = () => {
  return (
    <Container>
      <Tabs>
        <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
          <Button title="Tab 1" onPress={() => Toast.show("Hell")} />
        </Tab>
        <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
          <Button title="Tab 2" />
        </Tab>
        <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
          <Button title="Tab 3" />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabsAdvance;