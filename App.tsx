/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/**
 * TechAngar - AI-Powered Car Diagnostic App
 * 
 * Based on original work by Asitha L Konara (MIT License)
 * Original: https://github.com/AsithaLKonara/AI-Driven-Car-Fault-Code-Scanner-Mobile-App
 * 
 * TechAngar Author: Alpatov Aleksey
 * Contact: aalpatov@list.ru | +7 903 741-16-76
 * 
 * © 2026 TechAngar. All rights reserved.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
