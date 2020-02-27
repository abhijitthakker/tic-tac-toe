import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const gridSize = width * 0.75;

const styles = StyleSheet.create({
  header: {
    height: 158,
    marginTop: 25,
    borderColor: '#4682b4',
    borderWidth: 1,
    width: gridSize,
    alignSelf: 'center'
  },
  leaderBoard: {
    height: 120,
    borderBottomWidth: 0,
    flexDirection: 'row'
  },
  player1Container: {
    borderRightWidth: 1,
    flex: 1,
    borderRightColor: 'powderblue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playerWins: {
    paddingTop: 15,
    flex: 2,
    alignItems: 'center'
  },
  playerWinsText: {
    fontSize: 40,
    color: '#4682b4',
    fontWeight: '500'
  },
  playerName: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    color: '#4682b4'
  },
  playerNameText: {
    color: '#4682b4'
  },
  player2Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusContianer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'powderblue'
  },
  statusText: {
    color: 'steelblue',
    textAlign: 'center',
    height: 35,
    overflow: 'hidden',
    lineHeight: 35,
    alignSelf: 'center',
    width: gridSize
  }
});

const colors = {
  backgroundColor: ''
};

export { styles, colors };
