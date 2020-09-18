import { combineReducers } from 'redux';

//Reducers
import FirebaseReducer from './firebase/firebase.reducer.js';

const rootReducer = combineReducers({
    FirebaseReducer
})

export default rootReducer;