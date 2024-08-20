import React from 'react';
import { View } from 'react-native';

import { STYLES } from '../constants/Styles';
import { TileCoordinate } from '../models/TileCoordinate';
import Tile from './Tile';

type RowProps = {
  rowIndex: integer,
  rowMap: Map<number, Map<number, number[]>>,
  onTileSelected: (coordinate: TileCoordinate) => void,
}

function Row({ rowIndex, rowMap, onTileSelected } : RowProps): React.JSX.Element {

  return (
    <View style={STYLES.row}>
      <Tile coordinate={{row: rowIndex, column: 0}} rowMap={rowMap} onTileSelected={onTileSelected} />
      <Tile coordinate={{row: rowIndex, column: 1}} rowMap={rowMap} onTileSelected={onTileSelected} />
      <Tile coordinate={{row: rowIndex, column: 2}} rowMap={rowMap} onTileSelected={onTileSelected} />
    </View>
  );
}

export default Row;