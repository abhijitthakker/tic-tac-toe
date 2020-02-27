import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const gridSize = width * 0.75;
const cellSize = gridSize / 3;

const styles = StyleSheet.create({
  actionBar: {
    flex: 1,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionContainer: {
    color: '#4682b4',
    width: cellSize,
    textAlign: 'center',
    height: 100,
    lineHeight: 50,
    alignSelf: 'center'
  },
  actionImage: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  actionText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    color: '#4682b4'
  }
});

export { styles };
