import React from 'react';
import { View } from 'react-native';

import { STYLES } from '../constants/Styles';
import Row from './Row';

function Board(): React.JSX.Element {
  return (
    <View style={STYLES.board}>
      <Row />
      <Row />
      <Row />
    </View>
  );
}

export default Board;