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
import Board from './components/Board';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <Board />
    </SafeAreaView>
  );
}

export default App;
