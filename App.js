
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigator/Navigator'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import navButtonsReducer from './redux/navButtonsReducer'
import {Provider} from 'react-redux'
import myPostsRedcer from './redux/myPostsReducer'
import myFriendsReducer from './redux/friendsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  navButtons : navButtonsReducer,
  myPosts : myPostsRedcer,
  myFriends : myFriendsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
      </Provider>
    </>
  );
};


export default App;
