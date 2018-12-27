import React, {Component} from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import Quote from './Quote';

class QuoteScreen extends	React.Component {
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Quote quoteText="Awesome Quote" quoteSource="Source"/>
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

export default QuoteScreen