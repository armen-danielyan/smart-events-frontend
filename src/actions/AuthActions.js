import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {
	FIELD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	REGISTER_USER,
	CLEAN_AUTH_FORM,
	UPDATE_TOKEN,
	FETCH_CURRENT_USER,
	LOGOUT_USER
} from './types';
import config from 'config';
import { getToken, decodeToken } from 'config/Utils';

const ROOT_URL = config.HOST;

export const cleanForm = () => {
	return {
		type: CLEAN_AUTH_FORM
	};
};

export const fieldValueChanged = (typeName, text) => {
	return {
		type: FIELD_CHANGED,
		payload: {text: text, fieldName: typeName}
	};
};

export const loginUser = ({ email, password }, redirectPath) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		if(!email ||  !password) {
			loginUserFail(dispatch)
		} else {
			axios.post(`${ROOT_URL}api/login`, {'username': email, password})
			.then(user => loginUserSuccess(dispatch, user, redirectPath))
			.catch((error) => {
			 loginUserFail(dispatch)
			});
		}
	};
};

export const registerUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER });

		axios.post(`${ROOT_URL}api/register`, {email, password})
			.then(user => {
				dispatch({
					type: REGISTER_USER
				});
				Actions.pop();
			})
			.catch((error) => {
				loginUserFail(dispatch)
			});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

var loginUserSuccess = async (dispatch, user, redirectPath, params) => {
	try {
		await AsyncStorage.setItem(config.AUTH_TOKEN, user.data.token);
		dispatch({
			type: LOGIN_USER_SUCCESS,
			payload: user.data.token
		});
		dispatch({ type: FETCH_CURRENT_USER, payload: {
			user: decodeToken(user.data.token),
			token: user.data.token
		}});

		Actions.pop();
		if(redirectPath) {
			Actions[redirectPath](params);
		} 
		
	} catch (error) {
		// Error saving data
		console.log('token not saved');
	}
};

const updateToken = (dispatch, data) => {
		return (dispatch) => {
			console.log('dispatch update', data.token);
				AsyncStorage.setItem(config.AUTH_TOKEN, data.token);
		}
};

export const getUser = () => {
	 return (dispatch, getState) => {
	 	let {auth} = getState();
	 	if(!auth.isAuth || !auth.token) {
	 		AsyncStorage.getItem(config.AUTH_TOKEN).then((token) => {
				if(token !== null) {
					const user = decodeToken(token);
					dispatch({ type: FETCH_CURRENT_USER, payload: { user, token } });
				} else {
					dispatch({ type: LOGOUT_USER });
				}   
			});
	 	}
			
	}
};

export const logout = () => {
		return dispatch => {
				AsyncStorage.removeItem(config.AUTH_TOKEN).then(()=>
					dispatch({
							type: LOGOUT_USER 
					})
				);
		}
};
