import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { styles } from './styles';

const swapImg = require('../../assets/swap.png');
const newGameImg = require('../../assets/new-game.png');
const resetImg = require('../../assets/new-tournament.png');

export class ActionBoard extends React.Component {
  render() {
    const { onSwap, onNewGame, onReset } = this.props;
    return (
      <View style={styles.actionBar}>
        <TouchableOpacity
          onPress={onSwap}
          style={styles.actionContainer}
        >
          <Image
            style={styles.actionImage}
            source={swapImg}
          />
          <Text style={styles.actionText}>
            Swap Roles
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onNewGame}
          style={styles.actionContainer}
        >
          <Image
            style={styles.actionImage}
            source={newGameImg}
          />
          <Text style={styles.actionText}>
            New game
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onReset}
          style={styles.actionContainer}
        >
          <Image
            style={styles.actionImage}
            source={resetImg}
          />
          <Text style={styles.actionText}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
