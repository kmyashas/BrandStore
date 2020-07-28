import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

const ItemDetails = ({title,}) => {
    return (
        <View style={styles.container}>

            

                <TouchableOpacity style={styles.clothingTouch}
                
                >

                    <Text style={styles.titleStyle}>{title}</Text>

                </TouchableOpacity>

            

        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
    },
    titleStyle: {
        fontSize: 20,
        marginHorizontal: 20
    },
    clothingTouch: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 10,
        borderColor: '#C0C0C0'
    }
})
