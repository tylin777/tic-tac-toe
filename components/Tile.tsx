import React, { useState } from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { COLORS } from '../constants/Colors';
import { PLAYER_ONE, PLAYER_TWO } from '../constants/Constants';
import { STYLES } from '../constants/Styles';
import { TileCoordinate } from '../models/TileCoordinate';

type TileProps = {
  coordinate: TileCoordinate,
  onTileSelected: (coordinate: TileCoordinate) => void,
  currentPlayer: integer,
}

function Tile({ coordinate, onTileSelected, currentPlayer} : TileProps): React.JSX.Element {
  const [playerSelected, setPlayerSelected] = useState(0);

  const backgroundStyle = {
    backgroundColor: playerSelected === PLAYER_ONE ? COLORS.boldRed
      : playerSelected === PLAYER_TWO ? COLORS.boldBlue
      : COLORS.boldGrey,
  };

  const onTilePressed = () => {
    console.log("TYLOG: player " + (currentPlayer === PLAYER_ONE ? 1 : 2) + " has selected tile coordinate: [" + coordinate.row + ", " + coordinate.column + "]");

    if (playerSelected === 0) {
      setPlayerSelected(currentPlayer);
      onTileSelected(coordinate);
    }
  };

  return (
    <TouchableNativeFeedback onPress={onTilePressed}>
      <View style={[STYLES.tile, backgroundStyle]}>
        <Text style={STYLES.text}>
          {playerSelected === PLAYER_ONE ? 'x'
            : playerSelected === PLAYER_TWO ? 'o'
            : ''}
          </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default Tile;