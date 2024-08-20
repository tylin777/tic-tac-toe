import React from 'react';
import { View } from 'react-native';

import { STYLES } from '../constants/Styles';
import { TileCoordinate } from '../models/TileCoordinate';
import Row from './Row';

type BoardProps = {
  rowMap: Map<number, Map<number, number[]>>,
  onTileSelected: (coordinate: TileCoordinate) => void,
}

function Board({ rowMap, onTileSelected } : BoardProps): React.JSX.Element {
  return (
    <View style={STYLES.board}>
      <Row rowIndex={0} rowMap={rowMap} onTileSelected={onTileSelected} />
      <Row rowIndex={1} rowMap={rowMap} onTileSelected={onTileSelected} />
      <Row rowIndex={2} rowMap={rowMap} onTileSelected={onTileSelected} />
    </View>
  );
}

export default Board;