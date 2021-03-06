import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

const zenImage = require('./assets/zen.png')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            title="See Quote"
            onPress={() => this.props.navigation.navigate('QuoteScreen')}
        >
          <Image source={zenImage} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.readyText}>I'm ready to relax...</Text>
        {/*<Quote quoteText="Quote text here" quoteSource="- Great Source" />*/}
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#fff'
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: {width:0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonImage: {
    width:200,
    height:200
  }
});

export default HomeScreen