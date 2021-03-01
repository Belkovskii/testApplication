import {getFriends} from '../axios/axiosinstance'

const UPLOAD_FRIENDS = 'UPLOAD_FRIENDS'

const initialState = {
    items: [
        {
            name: "pvlchkhrv",
            id: 14497,
            uniqueUrlName : null,
            photos: {
                small: null,
                large: null
            },
            status: 'old user',
            followed: true,
            followingInProgress: false
        },
    ]
}

const friendsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPLOAD_FRIENDS : {
            return {
                ...state,
                items : [...action.payload.items]
            }
        }
        default : {
            return {...state}
        }
    }
}

const uploadFriendsActionCreator = data => ({type : UPLOAD_FRIENDS, payload : data})

export const uploadFriendThunkCreator = (currentPage, pageSize) => {
    return async dispatch => {
        let ajaxResponse = await getFriends(currentPage, pageSize)
        dispatch(uploadFriendsActionCreator({items : ajaxResponse.data.items}))
    }
}

export default friendsReducer

