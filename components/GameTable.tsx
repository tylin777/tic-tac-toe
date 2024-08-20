import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { COLORS } from '../constants/Colors';
import { PLAYER_ONE, PLAYER_TWO, UNSELECTED } from '../constants/Constants';
import { STYLES } from '../constants/Styles';
import Board from './Board';
import EndGameModal from './EndGameModal';

function GameTable(): React.JSX.Element {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [winningPlayer, setWinningPlayer] = useState(UNSELECTED);

  const [rowMap, setRowMap] = useState<Map<number, Map<number, number[]>>>(new Map());

  const toggleTurn = () => {
    if (currentPlayer === PLAYER_ONE) {
      setCurrentPlayer(PLAYER_TWO);
    } else {
      setCurrentPlayer(PLAYER_ONE);
    }
  }

  const checkIsWinningMove = (threeInARow: IterableIterator<number>) => {
    let sum = 0;
        for (const playerValue of threeInARow) {
          sum += playerValue;
        }

    for (playerValue in threeInARow) {
      console.log("TYLOG: checkIsWinningMove. playerValue " + playerValue);
      sum += value;
    }

    return Math.abs(sum) === 3;
  }

  const onTileSelected = (coordinate: TileCoordinate) => {
    if (!rowMap.has(coordinate.row)) {
      rowMap.set(coordinate.row, new Map<number, number[]>());
    }

    const row = rowMap.get(coordinate.row);

    if (!row.has(coordinate.column)) {
      row.set(coordinate.column, currentPlayer);

      const isWinningMove = checkIsWinningMove(row.values());
      if (isWinningMove) {
        setWinningPlayer(currentPlayer);
      }

      setRowMap(rowMap);

      if (!isWinningMove) {
        toggleTurn();
      }
    }
  }

  const onReset = () => {
    setCurrentPlayer(PLAYER_ONE);
    setWinningPlayer(UNSELECTED);

    setRowMap(new Map());
  }

  const backgroundStyle = {
    backgroundColor: currentPlayer === PLAYER_ONE ? COLORS.lightRed
      : currentPlayer === PLAYER_TWO ? COLORS.lightBlue
      : COLORS.lightGrey,
  };

  return (
    <View style={[STYLES.gameTable, backgroundStyle]}>
      <EndGameModal winningPlayer={winningPlayer} onReset={onReset} />
      <Text>Player 1</Text>
      <Board rowMap={rowMap} onTileSelected={currentPlayer === PLAYER_ONE ? onTileSelected : () => {}} />
      <Text>Player 2</Text>
      <Board rowMap={rowMap} onTileSelected={currentPlayer === PLAYER_TWO ? onTileSelected : () => {}} />
    </View>
  );
}

export default GameTable;