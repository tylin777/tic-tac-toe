import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { COLORS } from '../constants/Colors';
import { PLAYER_ONE, PLAYER_TWO, UNSELECTED } from '../constants/Constants';
import { STYLES } from '../constants/Styles';
import { TileCoordinate } from '../models/TileCoordinate';

type TileProps = {
  coordinate: TileCoordinate,
  rowMap: Map<number, Map<number, number[]>>,
  onTileSelected: (coordinate: TileCoordinate) => void,
}

function Tile({ coordinate, rowMap, onTileSelected } : TileProps): React.JSX.Element {
  let selectedByPlayer = UNSELECTED;
  if (rowMap.has(coordinate.row)) {
    if ((rowMap.get(coordinate.row)).has(coordinate.column)) {
      selectedByPlayer = (rowMap.get(coordinate.row)).get(coordinate.column);
    }
  }

  const backgroundStyle = {
    backgroundColor: selectedByPlayer === PLAYER_ONE ? COLORS.boldRed
      : selectedByPlayer === PLAYER_TWO ? COLORS.boldBlue
      : COLORS.boldGrey,
  };

  return (
    <TouchableNativeFeedback onPress={() => onTileSelected(coordinate)}>
      <View style={[STYLES.tile, backgroundStyle]}>
        <Text style={STYLES.text}>
          {selectedByPlayer === PLAYER_ONE ? 'x'
            : selectedByPlayer === PLAYER_TWO ? 'o'
            : ''}
          </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default Tile;