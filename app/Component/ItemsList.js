import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import ItemDetails from './ItemDetails'

const ItemsList = () => {
    return (
        <View style={styles.listItem}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
               <ItemDetails  title="Shirt"/> 
            
            
        
               <ItemDetails  title="T-Shirt"/> 
            

        
               <ItemDetails  title="Pant"/> 
            

        
               <ItemDetails  title="Formal- Pant"/> 
            

        
               <ItemDetails  title="Cassuals"/> 
            

        
               <ItemDetails  title="Belts"/> 
            

        
               <ItemDetails  title="Shoe"/> 
            

        
               <ItemDetails  title="Wallet"/> 
            

        
               <ItemDetails  title="Watch"/> 
            

        
               <ItemDetails  title="Shorts"/> 
            
            </ScrollView>
        </View>
    )
}

export default ItemsList

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        height: "10%",
        alignItems: 'center',
       
        
    }
})
