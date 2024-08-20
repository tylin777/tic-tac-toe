import React, { useState } from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import { COLORS } from '../constants/Colors';
import { STYLES } from '../constants/Styles';

function Tile(): React.JSX.Element {
  const [playerSelected, setPlayerSelected] = useState(0);

  const backgroundStyle = {
    backgroundColor: playerSelected === 1 ? COLORS.boldRed
      : playerSelected === -1 ? COLORS.boldBlue
      : COLORS.boldGrey,
  };

  const onTilePressed = () => {
    setPlayerSelected(1);
  };

  return (
    <TouchableNativeFeedback onPress={onTilePressed}>
      <View style={[STYLES.tile, backgroundStyle]}>
        <Text style={STYLES.text}>
          {playerSelected === 1 ? 'x'
            : playerSelected === -1 ? 'o'
            : ''}
          </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default Tile;