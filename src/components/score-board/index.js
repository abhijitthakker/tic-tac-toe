import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export class ScoreBoard extends React.Component {
  getCurrentPlayer = () => {
    const {
      state: {
        player1,
        player2,
        turn
      }
    } = this.props;
    return turn === player1.side ? player1.name : player2.name;
  };

  render() {
    const {
      state: {
        player1,
        player2,
        winner,
        steps
      }
    } = this.props;
    let status = '';
    if (winner) {
      status = `${winner} wins`;
    } else if (!status && steps === 9) {
      status = 'Draw!!';
    } else {
      status = `${this.getCurrentPlayer()}'s Turn`;
    }
    return (
      <View style={{ flex: 1, flexBasis: 110 }}>
        <View style={styles.header}>
          <View style={styles.leaderBoard}>
            <View style={styles.player1Container}>
              <View style={styles.playerWins}>
                <Text style={styles.playerWinsText}>
                  {player1.wins}
                </Text>
              </View>
              <View style={styles.playerName}>
                <Text style={styles.playerNameText}>
                  {player1.name} (
                  {player1.side === 1 ? 'X' : 'O'})
                </Text>
              </View>
            </View>
            <View style={styles.player2Container}>
              <View style={styles.playerWins}>
                <Text style={styles.playerWinsText}>
                  {player2.wins}
                </Text>
              </View>
              <View style={styles.playerName}>
                <Text style={styles.playerNameText}>
                  {player2.name} (
                  {player2.side === 1 ? 'X' : 'O'})
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.statusContianer}>
            <Text style={styles.statusText}>
              {status}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
