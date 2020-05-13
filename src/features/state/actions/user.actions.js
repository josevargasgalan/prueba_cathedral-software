import { LOGIN, LOGOUT } from './actionTypes/user.actions.types';
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

export const login = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            dispatch(loginUser(firebase.auth().currentUser));
    }).catch(error => {
        console.log(error)
    });
 }
}

export const logout = () => {
    return (dispatch) => {
        firebase.auth().signOut().then((res) => {
            dispatch(logoutUser());
    }).catch(error => {
        console.log(error)
    });
 }
}