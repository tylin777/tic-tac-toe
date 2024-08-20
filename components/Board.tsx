import React, { useState } from 'react';
import { View } from 'react-native';

import { PLAYER_ONE, PLAYER_TWO } from '../constants/Constants';
import { STYLES } from '../constants/Styles';
import Row from './Row';

function Board(): React.JSX.Element {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);

  const toggleTurn = () => {
    if (currentPlayer === PLAYER_ONE) {
      setCurrentPlayer(PLAYER_TWO);
    } else {
      setCurrentPlayer(PLAYER_ONE);
    }
  }

  return (
    <View style={STYLES.board}>
      <Row rowIndex={0} onTileSelected={toggleTurn} currentPlayer={currentPlayer} />
      <Row rowIndex={1} onTileSelected={toggleTurn} currentPlayer={currentPlayer} />
      <Row rowIndex={2} onTileSelected={toggleTurn} currentPlayer={currentPlayer} />
    </View>
  );
}

export default Board;