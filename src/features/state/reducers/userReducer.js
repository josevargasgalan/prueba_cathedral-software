import * as actions from '../actions/actionTypes/user.actions.types';

const initialState = {
   name: '',
   photoUrl: '',
   email: '',
   id: '',
   isAuthenticated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                name: action.user.displayName,
                photo: action.user.photoUrl,
                email: action.user.email,
                id: action.user.uid,
                isAuthenticated: true
            }
            default: return state;
    }
}

export default reducer;