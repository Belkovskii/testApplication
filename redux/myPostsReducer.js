const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'

const initialState = {
    myPosts : [
        {
            id : 5,
            postText : 'Ordered to start march to Kamakura'
        },
        {
            id : 4,
            postText : 'Appointed younder brother Ashikaga Tadayoshi as a head of government'
        }, 
        {
            id : 3,
            postText : 'Decided to move the shogun palace to Muromachi district in Kyoto'
        }, 
        { 
            id : 2,
            postText : 'Ordered to fund temple in memory of Godaigo emperor'
        }, 
        {
            id : 1,
            postText : 'Send my son Yoshiakira to Kyushu'
        }
    ]
}

const myPostsRedcer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                myPosts : [{
                    id : state.myPosts.length+1,
                    postText : action.payload
                    }, ...state.myPosts]
            }
        }
        case DELETE_POST : {
            const newMyPosts = state.myPosts.filter(myPost => myPost.id !== action.payload)
            return {
                ...state,
                myPosts : newMyPosts
            }
        }
        default : {
            return {...state}
        }
    }
}

export default myPostsRedcer

export const addPostActionCreator = newPostText => ({type : ADD_POST, payload : newPostText})
export const deletePostActionCreator = postId => ({type : DELETE_POST, payload : postId})