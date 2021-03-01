import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Button, Alert} from 'react-native'
import myProfileImage from '../../../assets/ashikaga.jpg'
import everyPostImage from '../../../assets/taka.jpg'
import deleteButton from '../../../assets/deletebutton.png'
import {connect} from 'react-redux'
import { useState } from 'react'
import {addPostActionCreator, deletePostActionCreator} from '../../../redux/myPostsReducer'

const MyProfile = ({myPosts, addPost, deletePost}) => {

    const [postInput, setPostInput] = useState('');

    const onSubmit = () => {
        if (postInput.trim()) {
            addPost(postInput)
            setPostInput('')
        }
    }

    const onDeletePress = postId => {
        deletePost(postId)
    }

    const myPostJsx = myPosts.map(myPost=>{
        return (
            <View style={stylesSet.postContainer} id={myPost.id}>
                <Image style={stylesSet.postImage} source={everyPostImage}/>
                <Text style={stylesSet.postText}>
                   {myPost.postText}
                </Text>
                <TouchableOpacity onPress={()=>onDeletePress(myPost.id)}>
                    <Image style={stylesSet.deleteButtonImage} source = {deleteButton}/>
                </TouchableOpacity>
            </View>
        )
    })

    return (
        <>
            <Text style={stylesSet.text}>Shoguns Profile</Text>
            <View style={stylesSet.card}>
                <View><Image style={stylesSet.image} source={myProfileImage}/></View>
                <View style={stylesSet.aboutmeContainer}>
                        <Text style={stylesSet.aboutme}>
                           { 'About person: Ahikaga Takauji, Shogun, ' +
                            '"military commander", '+ 
                            'hereditary military governor in Japan and ' +
                            "the de facto ruler of the country, despite " +
                            "officially being appointed by the emperor. "+
                            "My Ashikaga shogunate is also known as the "+
                            "Muromachi period of Japan, which followed "+
                            "the Kenmu Restoration."}
                        </Text>
                    </View>
            </View>

            <ScrollView>
                {myPostJsx}
            </ScrollView>

            <View style={{alignItems : 'center'}}>
                <TextInput 
                    style={{width : '80%', borderColor : 'black', borderWidth : 1}}
                    onChangeText={postText => setPostInput(postText)}
                    value={postInput}
                />
                <Button title='Submit' onPress={onSubmit}/> 
            </View>
        </>
    )
}

const stylesSet = StyleSheet.create({
    text : {
        fontSize : 20,
        marginLeft : 7
    },
    card : {
        backgroundColor : '#C5F2D0',
        borderStyle : 'solid',
        borderColor : 'black',
        borderWidth : 1,
        marginHorizontal : 10,
        marginVertical : 5,
        flexDirection : 'row'
    },
    image : {
        borderRadius : 50,
        height : 100,
        width : 100,
        marginHorizontal : 10,
        marginVertical : 5
    },
    aboutmeContainer : {
        flexDirection : 'row',
        flex : 1
    },
    aboutme : {
        textAlign : 'justify',
        padding : 10
    },
    postContainer : {
        backgroundColor : '#F0BDA6',
        marginHorizontal : 10,
        marginVertical : 5,
        flexDirection : 'row'
    },
    postImage : {
        width : 35,
        height : 35,
        borderRadius : 35,
        marginVertical : 3,
        marginHorizontal : 2
    },
    postText : {
        marginHorizontal : 5,
        flex : 1
    },
    deleteButtonImage : {
        width : 20,
        height : 20,
        borderRadius : 20,
        marginVertical : 3,
        marginHorizontal : 2
    }
})

const mapStateToProps = state => {
   return {
        myPosts : state.myPosts.myPosts
   }  
}
const mapDispatchToProps = dispatch => {
    return {
        addPost : newPostText => {
            dispatch(addPostActionCreator(newPostText))
        },
        deletePost : postId => {
            dispatch(deletePostActionCreator(postId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)