import { Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 1,
    backgroundColor: 'black',
  },
});

export default styles;
