import React from 'react';
import { View } from 'react-native';

import { STYLES } from '../constants/Styles';
import { TileCoordinate } from '../models/TileCoordinate';
import Tile from './Tile';

type RowProps = {
  rowIndex: integer,
  coordinatesMap: Map<TileCoordinate, number>,
  onTileSelected: (coordinate: TileCoordinate) => void,
}

function Row({ rowIndex, coordinatesMap, onTileSelected } : RowProps): React.JSX.Element {
  return (
    <View style={STYLES.row}>
      <Tile coordinate={{row: rowIndex, column: 0}} coordinatesMap={coordinatesMap} onTileSelected={onTileSelected} />
      <Tile coordinate={{row: rowIndex, column: 1}} coordinatesMap={coordinatesMap} onTileSelected={onTileSelected} />
      <Tile coordinate={{row: rowIndex, column: 2}} coordinatesMap={coordinatesMap} onTileSelected={onTileSelected} />
    </View>
  );
}

export default Row;