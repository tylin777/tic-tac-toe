import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { STYLES } from './constants/Styles';
import Tile from './components/Tile';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <Tile />
    </SafeAreaView>
  );
}

export default App;
