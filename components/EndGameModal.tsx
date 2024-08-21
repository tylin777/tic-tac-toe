/*
 * creds: https://reactnative.dev/docs/modal
 */

import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import { PLAYER_ONE, UNSELECTED } from '../constants/Constants';

type EndGameModalProps = {
  winningPlayer: integer,
  onReset: () => void,
}

function EndGameModal({ winningPlayer, onReset } : EndGameModalProps): React.JSX.Element {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={winningPlayer !== UNSELECTED}
        onRequestClose={onReset}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{winningPlayer === PLAYER_ONE ? 'Player 1 wins!' : 'Player 2 wins!'}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onReset}>
              <Text style={styles.textStyle}>Play Again?</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  modalView: {
    margin: 24,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  button: {
    borderRadius: 24,
    padding: 16,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default EndGameModal;