/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './src/container/Login'
import { StatusBar } from 'react-native';

const App = () =>  {
  return (
    <>
      <StatusBar hidden={true} />
      <Login mainHeading="Log in"/>
    </>
  );
};

export default App;
