import React from 'react';
import { View } from 'react-native';

import { STYLES } from '../constants/Styles';
import { TileCoordinate } from '../models/TileCoordinate';
import Row from './Row';

type BoardProps = {
  coordinatesMap: Map<TileCoordinate, number>,
  onTileSelected: (coordinate: TileCoordinate) => void,
}

function Board({ coordinatesMap, onTileSelected } : BoardProps): React.JSX.Element {
  return (
    <View style={STYLES.board}>
      <Row rowIndex={0} coordinatesMap={coordinatesMap} onTileSelected={onTileSelected} />
      <Row rowIndex={1} coordinatesMap={coordinatesMap} onTileSelected={onTileSelected} />
      <Row rowIndex={2} coordinatesMap={coordinatesMap} onTileSelected={onTileSelected} />
    </View>
  );
}

export default Board;