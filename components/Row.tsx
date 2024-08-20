import React from 'react';
import { View } from 'react-native';

import { STYLES } from '../constants/Styles';
import { TileCoordinate } from '../models/TileCoordinate';
import Tile from './Tile';

type RowProps = {
  rowIndex: integer,
  onTileSelected: (coordinate: TileCoordinate) => void,
  currentPlayer: integer,
}

function Row({ rowIndex, onTileSelected, currentPlayer} : RowProps): React.JSX.Element {
  return (
    <View style={STYLES.row}>
      <Tile coordinate={{row: rowIndex, column: 0}} onTileSelected={onTileSelected} currentPlayer={currentPlayer} />
      <Tile coordinate={{row: rowIndex, column: 1}} onTileSelected={onTileSelected} currentPlayer={currentPlayer} />
      <Tile coordinate={{row: rowIndex, column: 2}} onTileSelected={onTileSelected} currentPlayer={currentPlayer} />
    </View>
  );
}

export default Row;