/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import fabs from './components/Fabs/fabs';
import FloatingLebelInput from './components/FloatingLebelInput/FloatingLebelInput';
import Home from './components/Home/Home';

import AnatomyExample from './components/AnatomyExample/AnatomyExample';
import HeaderExample from './components/HeaderExample/HeaderExample';
import ContentExample from './components/ContentExample/ContentExample';
import FooterAnatomy from './components/FooterAnatomy/FooterAnatomy';
import CheckBoxs from './components/CheckBox/CheckBoxs';
import PickerDate from './components/DatePicker/PickerDate';
import SwiperDeck from './components/SwiperDeck/SwiperDeck';

import TabsAdvance from './components/TabsAdvance/TabsAdvance';
import TabsFooter from './components/TabsFooter/TabsFooter';
import TabsScroolView from './components/TabsScroolView/TabsScroolView';
import Picker_Ios from './components/Picker_IOS/Picker_Ios';
import Testing from './components/Testing/Testing';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />

      <Route exact path="/anatomy" component={AnatomyExample} />
      <Route exact path="/header" component={HeaderExample} />
      <Route exact path="/content" component={ContentExample} />
      <Route exact path="/footer" component={FooterAnatomy} />
      <Route exact path="/checkbox" component={CheckBoxs} />
      <Route exact path="/date" component={PickerDate} />
      <Route exact path="/deck" component={SwiperDeck} />

      <Route exact path="/fabs" component={fabs} />
      <Route exact path="/footer" component={TabsFooter} />
      <Route exact path="/form" component={FloatingLebelInput} />
      <Route exact path="/tabsAdv" component={TabsAdvance} />
      <Route exact path="/tabsScrol" component={TabsScroolView} />
      <Route exact path="/ios" component={Picker_Ios} />
      <Route exact path="/testing" component={Testing} />


    </NativeRouter>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'green',
  },

});

export default App;
