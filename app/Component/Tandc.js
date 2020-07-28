import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tandc = () => {
    return (
        <View>
            <Text style={styles.text}>T&C*: All the Clothings are</Text>
        </View>
    )
}

export default Tandc

const styles = StyleSheet.create({
    text:{
        fontSize: 10,
        color: 'red'
    }
})
