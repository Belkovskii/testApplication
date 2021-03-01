import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const PaginationButton = ({number, isActive, onPressButton}) => {
    return (
        <TouchableOpacity style={isActive ? stylesSet.activeButton : stylesSet.button} onPress={()=>onPressButton(number)}>
            <Text>{number}</Text>
        </TouchableOpacity>
    )
}

const stylesSet = StyleSheet.create({
    button : {
        backgroundColor : '#E2A5E3',
        borderRadius : 20,
        width : 20,
        height : 20,
        justifyContent : 'center',
        flexDirection: 'row',
        margin: 5
    },
    activeButton : {
        backgroundColor : '#E168E3',
        borderRadius : 24,
        borderColor : '#FCD603',
        borderWidth : 4,
        width : 24,
        height : 24,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'row',
        margin: 5,
        bottom : 2 
    }
})

export default PaginationButton