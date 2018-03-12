'use strict';

import config from 'config';
import {setHeaders} from 'config/Utils';
import {
    USER_PROFILE_FETCH_SUCCESS,
    USER_PROFILE_FETCH_FAIL,
    USER_PROFILE_FETCH,
    USER_PROFILE_FORM_FIELD_CHANGED,
    USER_PROFILE_UPDATE,
    USER_PROFILE_UPDATE_SUCCESS,
    USER_PROFILE_UPDATE_FAIL
} from './types';

const ROOT_URL = config.HOST;

export const getProfile = () => {
    return (dispatch, getState) => {
        dispatch({type: USER_PROFILE_FETCH});
        setHeaders(getState)
            .then((instance) => {
                instance.get(`${ROOT_URL}api/user/profile`)
                    .then((response) => {
                        dispatch({
                            type: USER_PROFILE_FETCH_SUCCESS,
                            payload: response.data[0]
                        });
                    }).catch((error) => {
                    dispatch({
                        type: USER_PROFILE_FETCH_FAIL,
                        payload: error
                    });
                    console.log(error);
                });
            });
    };
};

const formatFormData = (data) => {
    let fd = new FormData();

    fd.append('firstName', data.firstName);
    fd.append('lastName', data.lastName);
    fd.append('username', data.username);
    fd.append('location', data.location);
    fd.append('image', JSON.stringify(data.image));
    return fd;
};

export const updateProfile = (data) => {
    return (dispatch, getState) => {
        console.log(data);
        dispatch({type: USER_PROFILE_UPDATE});
        setHeaders(getState)
            .then((instance) => {
                const fd = formatFormData(data);
                instance.post(`${ROOT_URL}api/user/update/${data.id}`, {data: fd})
                    .then((response) => {
                        dispatch({
                            type: USER_PROFILE_UPDATE_SUCCESS,
                            payload: response.data[0]});
                    })
                    .catch((error) => {
                        dispatch({
                            type: USER_PROFILE_UPDATE_FAIL,
                            payload: error});
                        console.log(error);
                    });
            });
    };
};

export const profileFieldChanged = (typeName, text) => {
    return {
        type: USER_PROFILE_FORM_FIELD_CHANGED,
        payload: {text: text, fieldName: typeName}
    };
};