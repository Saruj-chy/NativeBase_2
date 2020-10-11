/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import fabs from './components/Fabs/fabs';
import FloatingLebelInput from './components/FloatingLebelInput/FloatingLebelInput';
import Home from './components/Home/Home';
import TabsAdvance from './components/TabsAdvance/TabsAdvance';
import TabsFooter from './components/TabsFooter/TabsFooter';
import TabsScroolView from './components/TabsScroolView/TabsScroolView';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/fabs" component={fabs} />
      <Route exact path="/footer" component={TabsFooter} />
      <Route exact path="/form" component={FloatingLebelInput} />
      <Route exact path="/tabsAdv" component={TabsAdvance} />
      <Route exact path="/tabsScrol" component={TabsScroolView} />



    </NativeRouter>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'green',
  },

});

export default App;
