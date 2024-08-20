import { StyleSheet } from 'react-native';
import { COLORS } from './Colors';

const STYLES = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.lightBlue,
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  text: {
    color: COLORS.white,
    fontSize: 36,
    paddingBottom: 8,
  },
});

export { STYLES };