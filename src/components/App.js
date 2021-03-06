/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import reducers from '../reducers/PeopleReducer';
import PeopleList from './PeopleList';
import Navigator from './Navigation';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});