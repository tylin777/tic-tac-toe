import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { COLORS } from '../constants/Colors';
import { PLAYER_ONE, PLAYER_TWO, UNSELECTED } from '../constants/Constants';
import { STYLES } from '../constants/Styles';
import { coordinateToString, TileCoordinate } from '../models/TileCoordinate';

type TileProps = {
  coordinate: TileCoordinate,
  coordinatesMap: Map<TileCoordinate, number>,
  onTileSelected: (coordinate: TileCoordinate) => void,
}

function Tile({ coordinate, coordinatesMap, onTileSelected } : TileProps): React.JSX.Element {
  const [selectedByPlayer, setSelectedByPlayer] = useState(UNSELECTED);

  useEffect(() => {
    const coordinateKey = coordinateToString(coordinate);

    if (coordinatesMap.has(coordinateKey)) {
      setSelectedByPlayer(coordinatesMap.get(coordinateKey));
    } else {
      setSelectedByPlayer(UNSELECTED);
    }
  }, [coordinatesMap]);

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