import React from 'react';
import { View } from 'react-native';

import { STYLES } from '../constants/Styles';
import Tile from './Tile';

function Row(): React.JSX.Element {
  return (
    <View style={STYLES.row}>
      <Tile />
      <Tile />
      <Tile />
    </View>
  );
}

export default Row;