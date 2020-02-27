import React, { Fragment } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import { firstPlayerNames, secondPlayerNames } from './data/constants';
import { styles, colors } from './styles/styles';
import { ScoreBoard, ActionBoard } from './components';

const { width } = Dimensions.get('window');
const gridSize = width * 0.75;
const cellSize = gridSize / 3;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        name:
          firstPlayerNames[Math.floor(Math.random() * firstPlayerNames.length)],
        wins: 0,
        side: 1
      },
      player2: {
        name:
          secondPlayerNames[
            Math.floor(Math.random() * secondPlayerNames.length)
          ],
        wins: 0,
        side: 2
      },
      board: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
      },
      turn: 1,
      isDirty: false,
      winner: null,
      steps: 0
    };
    this.gridClick = this.gridClick.bind(this);
    this.reset = this.reset.bind(this);
    this.switchSides = this.switchSides.bind(this);
  }

  checkWinner = () => {
    const { board } = this.state;
    if (board[1] !== 0) {
      const firstRow = board[1] === board[2] && board[2] === board[3];
      const firstColumn = board[1] === board[4] && board[4] === board[7];
      const firstDiagnol = board[1] === board[5] && board[5] === board[9];
      if (firstRow || firstColumn || firstDiagnol) {
        this.updateWinnersCount(board[1]);
        return;
      }
    }
    if (board[6] !== 0) {
      const secondRow = board[4] === board[5] && board[5] === board[6];
      const thirdColumn = board[3] === board[6] && board[6] === board[9];
      if (secondRow || thirdColumn) {
        this.updateWinnersCount(board[6]);
        return;
      }
    }
    if (board[7] !== 0) {
      const thirdRow = board[7] === board[8] && board[8] === board[9];
      const secondDiagnol = board[3] === board[5] && board[5] === board[7];
      if (thirdRow || secondDiagnol) {
        this.updateWinnersCount(board[7]);
        return;
      }
    }
    if (board[2] !== 0) {
      const secondColumn = board[2] === board[5] && board[5] === board[8];
      if (secondColumn) {
        this.updateWinnersCount(board[2]);
      }
    }
  };

  updateWinnersCount = (winner) => {
    const { player1, player2 } = this.state;
    const firstPlayerWins = player1.side === winner;
    if (firstPlayerWins) {
      this.setState({
        player1: { ...player1, wins: player1.wins + 1 },
        winner: player1.name
      });
    } else {
      this.setState({
        player2: { ...player2, wins: player2.wins + 1 },
        winner: player2.name
      });
    }
  };

  confirmSwitch = () => {
    const { winner, steps, isDirty } = this.state;
    if (winner || steps === 9) {
      this.switchSides();
      this.reset(false);
    } else if (isDirty) {
      Alert.alert(
        'Start new game?',
        'New game must be started to switch side',
        [
          {
            text: 'OK',
            onPress: () => {
              this.switchSides();
              this.reset(false);
            }
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ],
        { cancelable: false }
      );
    } else {
      this.switchSides();
    }
  };

  switchSides = () => {
    const { player1, player2 } = this.state;
    const player1Side = player1.side;
    this.setState({
      player1: { ...player1, side: player2.side },
      player2: { ...player2, side: player1Side },
      turn: 1
    });
  };

  createGrid = (start) => {
    const { board } = this.state;
    const payments = [];
    for (let i = start; i < start + 3; i += 1) {
      const color = i % 2 === 0 ? 'powderblue' : 'skyblue';
      payments.push(
        <TouchableOpacity
          key={i}
          onPress={() => this.gridClick(i)}
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: color
          }}
        >
          {board[i] !== 0 && (
            <Text
              style={{
                paddingTop: 25,
                fontSize: 50,
                color: '#4682b4',
                fontWeight: '500',
                textAlign: 'center'
              }}
            >
              {board[i] === 1 ? 'X' : 'O'}
            </Text>
          )}
        </TouchableOpacity>
      );
    }
    return payments;
  }

  reset(resetAll) {
    this.setState({
      board: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0
      },
      turn: 1,
      isDirty: false,
      winner: null,
      steps: 0
    });
    if (resetAll) {
      this.setState({
        player1: {
          name:
            firstPlayerNames[
              Math.floor(Math.random() * firstPlayerNames.length)
            ],
          wins: 0,
          side: 1
        },
        player2: {
          name:
            secondPlayerNames[
              Math.floor(Math.random() * secondPlayerNames.length)
            ],
          wins: 0,
          side: 2
        }
      });
    }
  }

  gridClick(gridNumber) {
    const {
      turn,
      winner,
      steps,
      board
    } = this.state;
    if (board[gridNumber] === 0 && !winner) {
      const nextTurn = turn === 1 ? 2 : 1;
      board[gridNumber] = turn;
      this.setState({
        board,
        turn: nextTurn,
        isDirty: true,
        steps: steps + 1
      });
      this.checkWinner();
    }
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.backgroundColor }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
          <View style={{ flex: 1 }}>
            <ScoreBoard state={this.state} />
            <View style={styles.gridContainer}>
              <View overflow="hidden" style={styles.gridSubContainer}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  { this.createGrid(1) }
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  { this.createGrid(4) }
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  { this.createGrid(7) }
                </View>
              </View>
            </View>
            <ActionBoard
              onSwap={this.confirmSwitch}
              onNewGame={() => this.reset(false)}
              onReset={() => this.reset(true)}
            />
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
