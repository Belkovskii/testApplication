import React, {useEffect} from 'react'
import { useState } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PaginationButton from '../../viewComponents/PaginationButton'
import {uploadFriendThunkCreator} from '../../../redux/friendsReducer'
import {connect} from 'react-redux'
import noface from '../../../assets/noface.png'

const Friends = ({uploadUsers, friends}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const onPaginationButtonPress = pageNumber => {
        setCurrentPage(pageNumber)
    }
    const friendsJsx = friends.map(friend=>{
        return (
            <View style={stylesSet.friendsCardContainer}>
                <View>
                    <Image style={stylesSet.avatar} source={noface}/>
                </View>
                <View style={{marginLeft: 10}}>
                    <Text>Nickname: </Text>
                </View>
                <View>
                    <Text style={{fontWeight : 'bold', fontSize : 15}}>{friend.name}</Text>
                </View>
                
            </View>
        )
    })
    
    useEffect(()=>uploadUsers(currentPage), [currentPage])
    const pagination = []
    for (let i=1; i<=10; i++) {
        pagination.push(
            <PaginationButton number={i} isActive={i===currentPage} onPressButton={onPaginationButtonPress}/>
        )
    }
    return (
        <>
            <Text style={stylesSet.text}>Friends</Text>
            <View style={{flexDirection : 'row'}}>
                {pagination}
            </View>
            <View>
                {friendsJsx}
            </View>
        </>
    )
}

const stylesSet = StyleSheet.create({
    text : {
        fontSize : 20
    },
    friendsCardContainer : {
        marginHorizontal : 10,
        marginVertical : 10,
        borderColor : 'black',
        borderWidth : 1,
        flexDirection : 'row'
    },
    avatar : {
        width: 50,
        height: 50
    }
})

const mapStateToProps = state => {
    return {
        friends : state.myFriends.items
    }
}
const mapDispatchToProps = dispatch => {
    return {
        uploadUsers : currentPageNumber => {
            dispatch(uploadFriendThunkCreator(currentPageNumber, 5))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)