import { act } from "react-test-renderer"

const SET_AS_ACTIVE = 'SET_AS_ACTIVE'

const initialState = {
    navButtons : [
        {
            id : 1,
            name : 'MyProfile',
            labelText : 'MyProfile',
            isActive : true
        }, 
        {
            id : 2,
            name : 'Dialogs',
            labelText : 'Dialogs',
            isActive : false
        }, 
        {
            id : 3,
            name : 'Friends',
            labelText : 'Friends',
            isActive : false
        }, 
        {
            id : 4,
            name : 'Login',
            labelText : 'Login',
            isActive : false
        }
    ]
}

const navButtonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AS_ACTIVE : {
            const newNavButtons = state.navButtons.map(navButton => {
                if (navButton.id === action.payload) {
                    return {...navButton, isActive : true}
                } else {
                    return {...navButton, isActive : false}
                }
            })
            return {...state, navButtons : newNavButtons}
        }
        default : {
            return {...state}
        }
    }
}

export const setIsActiveActionCreator = buttonId => ({type : SET_AS_ACTIVE, payload : buttonId})

export default navButtonsReducer