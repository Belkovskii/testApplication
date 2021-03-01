import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {setIsActiveActionCreator} from '../../../redux/navButtonsReducer'

const Navbar = ({navbarButtons, navigateTo}) => {
    const buttons = navbarButtons.map(buttonData => (
            <TouchableOpacity 
                id={buttonData.id} 
                style={buttonData.isActive ? stylesSet.activeButton : stylesSet.button} 
                onPress={()=>navigateTo(buttonData.id, buttonData.name)}>
                <Text style={stylesSet.text}>
                    {buttonData.labelText}
                </Text>
            </TouchableOpacity> 
        )
    )
    return (
        <>
            <View style={stylesSet.container}>
                {buttons}  
            </View>
        </>
    )
}

const stylesSet = StyleSheet.create({
    container : {
        flexDirection : 'row',
        backgroundColor : '#CAF2BA',
        height : 80
    },
    button : {
        flex : 1,
        backgroundColor : '#82DC8D',
        margin : 5,
        borderRadius : 10,
        borderStyle : 'solid',
        borderColor : '#9EA99F',
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    activeButton : {
        flex : 1,
        backgroundColor : '#70BD7A',
        margin : 5,
        borderRadius : 10,
        borderStyle : 'solid',
        borderColor : '#9EA99F',
        borderWidth : 3,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontWeight : 'bold'
    }
})

const mapStateToProps = state => {
    return {
        navbarButtons : state.navButtons.navButtons,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        navigateTo : (buttonId, buttonName) => {
            ownProps.navigation.navigate(buttonName)
            dispatch(setIsActiveActionCreator(buttonId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)