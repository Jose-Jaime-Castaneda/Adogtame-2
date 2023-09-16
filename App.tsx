import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuStack from './src/components/Navigation/Stack';


function App(): JSX.Element {
  return(
    <NavigationContainer>
      <MenuStack />
    </NavigationContainer>
  );
}

export default App;