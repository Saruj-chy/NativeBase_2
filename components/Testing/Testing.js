import React from 'react';
import { Text, View } from 'react-native';

const Testing = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text style={{ padding: 10, backgroundColor: 'orange', position: 'absolute', bottom: 0, width: '100 %' }}>Hello</Text>

    </View>
  );
};

export default Testing;