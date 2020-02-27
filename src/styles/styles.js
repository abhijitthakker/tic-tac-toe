import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const gridSize = width * 0.75;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexBasis: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridSubContainer: {
    width: gridSize,
    height: gridSize,
    borderRadius: 5,
    borderColor: '#bddfeb',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const colors = {
  backgroundColor: '#F0FFFF'
};

export { styles, colors };
