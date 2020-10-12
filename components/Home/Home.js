/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);

const Home = ({ history }) => {
  return (
    <View >
      <View style={{ backgroundColor: 'blue', flexDirection: 'row' }}>
        {/* <Button title="<==back" onPress={() => history.push('/')} /> */}
        <Text style={{ color: 'white', flex: 1, textAlign: 'center', textAlignVertical: 'center', padding: 10 }}> Native Base 2 </Text>
      </View>

      <View style={styles.container}>
        <Button title="Fabs" onPress={() => history.push('/fabs')} />
        <Separator />
        <Button title="Header Anatomy" onPress={() => history.push('/header')} />
        <Separator />
        <Button title="Content Anatomy" onPress={() => history.push('/content')} />
        <Separator />
        <Button title="Footer Anatomy" onPress={() => history.push('/footer')} />
        <Separator />
        <Button title="Check Box" onPress={() => history.push('/checkbox')} />
        <Separator />
        <Button title="Date Picker" onPress={() => history.push('/date')} />
        <Separator />
        <Button title="Deck Swiper" onPress={() => history.push('/deck')} />
        <Separator />
        <Button title="Footer Tabs" onPress={() => history.push('/footer')} />
        <Separator />
        <Button title="Floating Level Input" onPress={() => history.push('/form')} />
        <Separator />
        <Button title="Tabs Advanced" onPress={() => history.push('/tabsAdv')} />
        <Separator />
        <Button title="Tabs ScroolView" onPress={() => history.push('/tabsScrol')} />
        <Separator />



      </View>





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});
export default Home;
