import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

const SearchBar = () => {
    return (
        <View style={styles.searchBox}>
            <FontAwesome name="search" size={34} color="gray" style={styles.searchIcon} />
            <TextInput 
            placeholder='Search'
            style={styles.searchInput}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor:'#fff',
        marginVertical: '5%',
        height: '7%',
        marginHorizontal: '3%',
        borderRadius: 26,
        flexDirection: 'row',
        
        
    },
    searchInput: {
        fontSize: 25,
        flex:1,
        marginHorizontal: 5,
    },
    searchIcon: {
        alignSelf: 'center',
        marginHorizontal: 10
    }
})
