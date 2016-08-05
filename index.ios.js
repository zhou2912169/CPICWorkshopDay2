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
  View,
  Image,
  ScrollView,
} from 'react-native';
import Header from './header.js';
import Describe from './describe.js';
import Changelog from './changelog.js';
import StatusBar from './statusBar.js';
import Footer from './footer.js';
import data from './data.json';

class CPICWorkshop extends Component {
  render() {
   //console.log(data[0])
    return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.twitterCard}>
          <Header user={data[0].user} isFollowing={data[0].isFollowing}/>
          <Describe text={data[0].text}/>
          <Changelog previewBox={data[0].previewBox}/>
          <StatusBar activities={data[0].activities}/>
          <Footer createdAt={data[0].createdAt} activities={data[1].activities}/>
        </View>
      </View>
    </ScrollView>
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
    flexDirection:'column',
    marginVertical: 20,
    marginHorizontal: 5,
    padding:10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('CPICWorkshop', () => CPICWorkshop);
