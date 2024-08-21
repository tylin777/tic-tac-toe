import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { COLORS } from '../constants/Colors';
import { PLAYER_ONE, PLAYER_TWO, UNSELECTED } from '../constants/Constants';
import { STYLES } from '../constants/Styles';
import { coordinateToString, TileCoordinate } from '../models/TileCoordinate';
import Board from './Board';
import EndGameModal from './EndGameModal';

function GameTable(): React.JSX.Element {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [winningPlayer, setWinningPlayer] = useState(UNSELECTED);

  const [lastMove, setLastMove] = useState<TileCoordinate | null>(null);

  const [coordinatesMap, setCoordinatesMap] = useState<Map<TileCoordinate, number>>(new Map());

  const toggleTurn = () => {
    if (currentPlayer === PLAYER_ONE) {
      setCurrentPlayer(PLAYER_TWO);
    } else {
      setCurrentPlayer(PLAYER_ONE);
    }
  }

  const checkIsWinningMove = (coordinate: TileCoordinate) => {
    // check 3 in a row
    let rowSum = 0;
    for (let j = 0; j < 3; j++) {
      rowSum += coordinatesMap.get(coordinateToString({row: coordinate.row, column: j}));
      if (Math.abs(rowSum) === 3) {
        return true;
      }
    }

    // check 3 in a column
    let columnSum = 0;
    for (let i = 0; i < 3; i++) {
      columnSum += coordinatesMap.get(coordinateToString({row: i, column: coordinate.column}));
      if (Math.abs(columnSum) === 3) {
        return true;
      }
    }

    // check back diagonal '\'
    let backDiagonalSum = 0;
    for (let b = 0; b < 3; b++) {
      backDiagonalSum += coordinatesMap.get(coordinateToString({row: b, column: b}));
      if (Math.abs(backDiagonalSum) === 3) {
        return true;
      }
    }

    // check forward diagonal '/'
    let forwardDiagonalSum = 0;
    for (let f = 0; f < 3; f++) {
      forwardDiagonalSum += coordinatesMap.get(coordinateToString({row: 2 - f, column: f}));
      if (Math.abs(forwardDiagonalSum) === 3) {
        return true;
      }
    }

    return false;
  }

  const onTileSelected = (coordinate: TileCoordinate) => {
    if (!coordinatesMap.has(coordinate)) {
      setLastMove(coordinate);

      setCoordinatesMap(previousMap => {
        const updatedMap = new Map(previousMap);
        updatedMap.set(coordinateToString(coordinate), currentPlayer);
        return updatedMap;
      });
    }
  }

  useEffect(() => {
    if (lastMove) {
      const isWinningMove = checkIsWinningMove(lastMove);
      if (isWinningMove) {
        setWinningPlayer(currentPlayer);
      } else {
        toggleTurn();
      }
    }
  }, [coordinatesMap, lastMove]);

  const onReset = () => {
    setCurrentPlayer(PLAYER_ONE);
    setWinningPlayer(UNSELECTED);

    setLastMove(null);

    setCoordinatesMap(new Map());
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
      <Board coordinatesMap={coordinatesMap} onTileSelected={currentPlayer === PLAYER_ONE ? onTileSelected : () => {}} />
      <Text>Player 2</Text>
      <Board coordinatesMap={coordinatesMap} onTileSelected={currentPlayer === PLAYER_TWO ? onTileSelected : () => {}} />
    </View>
  );
}

export default GameTable;