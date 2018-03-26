import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const innerHorizontalPad = '7%';

export default StyleSheet.create({
  // Fill outer wrapper
  wrapper: {
    width: width * 0.5,
    height: 130,
    borderRadius: 5,
    overflow: 'hidden',
  },
  jumboWrapper: {
    width: width * 0.8,
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerGradientWrapper: {
    paddingBottom: 10,
    paddingTop: 0,
    paddingHorizontal: innerHorizontalPad,
  },
  headerGradientWrapperJumbo: {
    paddingBottom: 15,
    paddingTop: 20,
    paddingHorizontal: innerHorizontalPad,
  },
  title: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 3,
  },
  titleJumbo: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 5,
  },
  footerWrapper: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  actionButtonWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 40,
  },
  actionButton: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionButtonText: {
    fontFamily: 'th-fancy-medium',
    fontSize: 15,
    color: '#fff',
  }
});
