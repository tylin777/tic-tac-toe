import { StyleSheet } from 'react-native';
import { COLORS } from './Colors';

const STYLES = StyleSheet.create({
  board: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  safeArea: {
    backgroundColor: COLORS.lightBlue,
    flex: 1,
  },
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    // TODO: make borders more dynamic based on tile coordinates re: tic-tac-toe #
    borderColor: COLORS.white,
    borderWidth: 1,
  },
  text: {
    color: COLORS.white,
    fontSize: 36,
    paddingBottom: 8,
  },
});

export { STYLES };