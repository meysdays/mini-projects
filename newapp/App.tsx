import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './componenets/FlatCards';
import ElevatedCards from './componenets/ElevatedCards';
import FancyCard from './componenets/FancyCard';
import ActionCard from './componenets/ActionCard';
import ContactList from './componenets/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
