import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation';
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

const App = () => {
  const [info, setInfo] = useState<string>();
  return (
    <GlobalContext.Provider value={[info, setInfo]}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GlobalContext.Provider>
  );
};

export default App;
