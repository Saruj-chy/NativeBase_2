import React from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { Text } from 'react-native';


const TabsScroolView = () => {
  return (
    <Container>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab heading="Tab1">
          <Text style={{ backgroundColor: 'gray', padding: 50, margin: 20, color: 'black' }}> Tab 1</Text>
        </Tab>
        <Tab heading="Tab2">
          <Text style={{ backgroundColor: 'cyan', padding: 50, margin: 20, color: 'black' }}> Tab 2</Text>

        </Tab>
        <Tab heading="Tab3">
          <Text style={{ backgroundColor: 'gray', padding: 50, margin: 20, color: 'black' }}> Tab 3</Text>

        </Tab>
        <Tab heading="Tab4">
          <Text style={{ backgroundColor: 'cyan', padding: 50, margin: 20, color: 'black' }}> Tab 4</Text>

        </Tab>
        <Tab heading="Tab5">
          <Text style={{ backgroundColor: 'gray', padding: 50, margin: 20, color: 'black' }}> Tab 5</Text>

        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabsScroolView;