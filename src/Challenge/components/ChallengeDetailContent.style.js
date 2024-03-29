import { StyleSheet } from 'react-native';
import { Colors } from 'Global/constants';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontFamily: 'th-fancy-regular',
    marginBottom: 15,
  },
  label: {
    fontSize: 24,
    fontWeight: '600',
    color: '#222',
    marginBottom: 15,
  },
  timeLeftWrapper: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.border,
    marginBottom: 30,
    overflow: 'hidden',
  },
  timeLeft: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: Colors.border,
    backgroundColor: '#000',
  },
  timeLeftText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  periodString: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    paddingTop: 9,
  },
  placeWrapper: {
    marginBottom: 20,
  },
});
