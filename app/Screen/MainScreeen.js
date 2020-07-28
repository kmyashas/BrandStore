import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import SearchBar from '../Component/SearchBar'
import ItemsList from '../Component/ItemsList'
import ItemDescription from '../Component/ItemDescription'
import Tandc from '../Component/Tandc'

const MainScreeen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.components}>
            <SearchBar/>
            <ItemsList />
            <ItemDescription />
            <Tandc />
            </View>
        </View>
    )
}

export default MainScreeen

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: '100%',
        backgroundColor: '#000000'
    },
    components:{
        flex:1,
        minHeight: Math.round(Dimensions.get('window').height),
        //minWidth: Math.round(Dimensions.get('window').width), 
    }
})
