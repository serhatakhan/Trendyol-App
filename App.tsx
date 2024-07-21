import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import { store } from './src/store';
// App'in tipi, React'ın altındaki FC'den gelecek dedik
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
