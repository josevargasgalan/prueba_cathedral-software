import { LOGIN, LOGOUT, LOGIN_ERROR } from './actionTypes/user.actions.types';
import firebase from 'firebase';

export const loginUser = (payload) => {
    return {
        type: LOGIN,
        user: payload
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            dispatch(loginUser(firebase.auth().currentUser));
    }).catch(error => {
            dispatch(loginError())
    });
 }
}

export const logout = () => {
    return (dispatch) => {
        firebase.auth().signOut().then((res) => {
            dispatch(logoutUser());
        })
    }
}