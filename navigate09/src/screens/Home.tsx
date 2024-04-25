import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStartParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStartParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate("Details",{
        //   productId:"86"
        // })}
        // onPress={() => navigation.navigate("Details")}

        onPress={() =>
          navigation.push('Details', {
            productId: '86'
          })
        }
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
