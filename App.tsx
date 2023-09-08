import React from 'react';
import Prelogin from './src/components/Prelogin/Prelogin'
import CargaInicial from './src/components/Prelogin/CargaInicial'
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/components/navigation/BottomTab';


function App(): JSX.Element {
  return(
    // <Prelogin />

    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
}

export default App;