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

const styles = StyleSheet.create({
    boardSquare: {
        flex: 1,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'black',
    }
})
export default BoardSquare;