const INITIAL_STATE = {
    notes: undefined,
}

function NotesReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'UPDATE_NOTES':
            return {
                ...state,
                notes: action.payload,
            }

        default: 
            return state;
    }
}

export default NotesReducer;