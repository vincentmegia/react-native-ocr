import { Dimensions, StyleSheet } from 'react-native';
import { getHeaderHeight } from '../utils/cheapStore';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  containerBackdrop: {
    opacity: 0.5,
    backgroundColor: '#FFFFFF',
  },
  containerOverlay: {
    width: window.width,
    aspectRatio: 4 / 3,
  },
  imageContainer: {
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    borderWidth: 6,
    borderRadius: 26,
    borderColor: 'grey',
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  cameraImage: {
    height: 80,
    width: 80,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: window.width,
  },
});

export default styles;
