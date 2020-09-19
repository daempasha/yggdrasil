const INITIAL_STATE = {
    token: null,
    user: null
}

function FirebaseReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'STORE_TOKEN':
            return {
                ...state,
                token: action.payload,
            }
        case 'STORE_USER':
            return {
                ...state,
                user: action.payload
            }
        default: 
            return state;
    }
}

export default FirebaseReducer;