import { GET_USER } from './actionTypes/user.actions.types';
import firebase from 'firebase';

export const sendUser = (payload) => {
    return {
        type: GET_USER,
        user: payload
    }
}

export const getUser = (email, password) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            console.log(firebase.auth().currentUser)
            dispatch(sendUser(firebase.auth().currentUser));
    }).catch(error => {
        console.log(error)
    });
 }
}