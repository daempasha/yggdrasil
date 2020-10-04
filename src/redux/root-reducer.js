import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Reducers
import FirebaseReducer from './firebase/firebase.reducer.js';
import NotesReducer from './notes/notes.reducer.js';

const rootReducerConfig = {
    key: 'root',
    storage: storage,
    whitelist: []
}

const notesReducerConfig = {
    key: 'notes',
    storage: storage,
    blacklist: []
}

const rootReducer = combineReducers({
    firebase: FirebaseReducer,
    notes: persistReducer(notesReducerConfig, NotesReducer )
})


export default persistReducer(rootReducerConfig, rootReducer);