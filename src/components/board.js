import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BoardSquare from './boardSquare';

const Board = props => {
    return(
        <View>
            <View style={styles.boardRow}>
                <BoardSquare status='' id={1} />
                <BoardSquare status='' id={2} />
                <BoardSquare status='' id={3} />
            </View>
            <View style={styles.boardRow}>
                <BoardSquare status='' id={4} />
                <BoardSquare status='' id={5} />
                <BoardSquare status='' id={6} />
            </View>
            <View style={styles.boardRow}>
                <BoardSquare status='' id={7} />
                <BoardSquare status='' id={8} />
                <BoardSquare status='' id={9} />
            </View>
        </View>
    );
}

const styles = new StyleSheet({
    boardRow: {
        height: 200,
        width: 600,
        backgroundColor: 'red'
    }
})

export default Board;