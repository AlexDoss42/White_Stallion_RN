import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default DossHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>White Stallion</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'black',
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 32
    }
})