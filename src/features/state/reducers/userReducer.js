import * as actions from '../actions/actionTypes/user.actions.types';

const initialState = {
   name: '',
   photoUrl: '',
   email: '',
   id: '',
   isAuthenticated: false,
   loginError: false
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
                isAuthenticated: true,
                loginError: false
            }
        case actions.LOGOUT:
            return {
                ...state,
                ...initialState
            }
        case actions.LOGIN_ERROR:
            return {
                ...state,
                loginError: true
            }
            default: return state;
    }
}

export default reducer;