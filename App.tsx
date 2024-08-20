import React from 'react';
import { SafeAreaView } from 'react-native';

import { STYLES } from './constants/Styles';
import GameTable from './components/GameTable';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <GameTable />
    </SafeAreaView>
  );
}

export default App;
