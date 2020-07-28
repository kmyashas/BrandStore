import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import ItemComponent from './ItemComponent'

const ItemDescription = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom: '15%'}}>
               <ItemComponent title='Shirts' 
               imageSource={require('../Screen/Images/Shirt.png')}
               />

        <ItemComponent  title="T-Shirt"
         imageSource={require('../Screen/Images/t-shirt.png')}
         /> 
     

 
        <ItemComponent  title="Pant"
         imageSource={require('../Screen/Images/pant.png')}
         /> 
     

 
        <ItemComponent  title="Formal- Pant"
         imageSource={require('../Screen/Images/formalpant.png')}
         /> 
     

 
        <ItemComponent  title="Cassuals"
         imageSource={require('../Screen/Images/cassuals.png')}
         /> 
     

 
        <ItemComponent  title="Belts"
         imageSource={require('../Screen/Images/belt.png')}
         /> 
     

 
        <ItemComponent  title="Shoe"
         imageSource={require('../Screen/Images/shoe.png')}
         /> 
     

 
        <ItemComponent  title="Wallet"
         imageSource={require('../Screen/Images/wallet.png')}
         /> 
     

 
        <ItemComponent  title="Watch"
         imageSource={require('../Screen/Images/watch.png')}
         /> 
     

 
        <ItemComponent  title="Shorts"
         imageSource={require('../Screen/Images/shorts.png')}
         /> 
         
            </ScrollView>
        </View>
    )
}

export default ItemDescription

const styles = StyleSheet.create({
    container: {
        flex:1, 
        //alignItems: 'center',
        justifyContent: 'center'
    },
    
    
})
