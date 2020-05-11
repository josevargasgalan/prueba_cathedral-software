import * as actions from '../actions/actionTypes/user.actions.types';

const initialState = {
   name: '',
   photoUrl: '',
   email: ''
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actions.GET_USER:
            return {
                ...state,
                name: action.user.displayName,
                photo: action.user.photoUrl,
                email: action.user.email
            }
            default: return state;
    }
}

export default reducer;