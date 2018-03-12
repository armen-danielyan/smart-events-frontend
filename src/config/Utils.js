'use strict';
import {AsyncStorage} from 'react-native';
import jwtDecode from 'jwt-decode'; 
import config from 'config';
import axios from 'axios';

export var getToken = async () => {
	try {
		let token = await AsyncStorage.getItem(config.AUTH_TOKEN);
		return token;
	} catch (error) {
		// Error saving data
		console.log('error getting token');
		return false;
	}
};


export const decodeToken = (token) => {
	const decoded = jwtDecode(token);
	return decoded;
};

export const setHeaders = (getState) => {
	let instance = axios.create();
	let {auth} = getState();

	return new Promise((resolve, reject) => {
		if(auth.isAuth && auth.token) {
			instance.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
			resolve(instance);
		} else {
			getToken()
			.then((token) => {
				instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				resolve(instance);
			});
		}
	});  
};
