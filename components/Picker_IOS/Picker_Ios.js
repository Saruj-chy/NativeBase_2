import React from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';

const yearView = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

const Picker_Ios = () => {
  return (
    <View >
      <Text style={{ fontSize: 18, backgroundColor: 'orange', color: 'black', padding: 10 }}>hello set the time:</Text>
      <View style={{ position: 'relative' }} >
        <ScrollView style={{ backgroundColor: 'gray', height: 200, position: 'absolute', width: '100 %' }}>
          {
            yearView.map(year => <Text style={{ textAlign: 'center', fontSize: 20, padding: 10 }}>{year} </Text>)
          }
        </ScrollView>
        <TextInput placeHolderText="hello" style={{ backgroundColor: 'transparent', position: 'absolute', width: '100 %', borderColor: 'red', borderWidth: 2 }} />
      </View>
      <Text onPress={() => c} style={{ position: 'relative', backgroundColor: 'green', color: 'red', fontSize: 18, padding: 10 }}>Submit</Text>
    </View>
  );
};

export default Picker_Ios;