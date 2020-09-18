const INITIAL_STATE = {
    firebase: null
}

function FirebaseReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'STORE_FIREBASE':
            return {
                firebase: action.payload,
            }
        default: 
            return state;
    }
}

export default FirebaseReducer;