import { LOGIN } from './actionTypes/user.actions.types';
import firebase from 'firebase';

export const sendUser = (payload) => {
    return {
        type: LOGIN,
        user: payload
    }
}

export const login = (email, password) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            dispatch(sendUser(firebase.auth().currentUser));
    }).catch(error => {
        console.log(error)
    });
 }
}