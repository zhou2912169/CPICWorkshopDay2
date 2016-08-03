/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CPICWorkshop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.twitterCard}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  twitterCard: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('CPICWorkshop', () => CPICWorkshop);
