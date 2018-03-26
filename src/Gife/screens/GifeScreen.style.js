import { StyleSheet } from 'react-native';
import { Colors } from 'Global/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBar: {
    height: 70,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  topBarButton: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    fontFamily: 'th-fancy-medium',
    color: Colors.textOnPinkInactive,
    fontSize: 18,
  },
  topBarTextActive: {
    color: '#fff',
  },
});
