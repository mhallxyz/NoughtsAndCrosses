import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const BoardSquare = props => {
    return(
        <View style={styles.boardSquare}>
            <Text>{props.id}</Text>
            <Text>{props.status}</Text>
        </View>
    );
}

const styles = new StyleSheet({
    boardSquare: {
        height: 200,
        width: 200,
        backgroundColor: 'red',
        borderWidth: '1px',
        borderColor: 'black'
    }
})
export default BoardSquare;