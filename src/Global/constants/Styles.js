import { StyleSheet } from 'react-native';
import Colors from './Colors';

// Style constants
export const horizontalPad = 20;
export const sponsorImageRatio = 0.4;

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: horizontalPad,
    flex: 1,
  },
  horizontalPad: {
    paddingHorizontal: horizontalPad,
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 32,
    fontSize: 24,
    marginBottom: 18,
    fontFamily: 'th-fancy-regular',
    color: '#222',
  },
  headerFront: {
    color: Colors.textGrey,
    marginRight: 100,
  },
  shadow: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 10,
    shadowRadius: 10,
  },
});
