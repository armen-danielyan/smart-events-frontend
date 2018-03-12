'use strict';
import {
    USER_PROFILE_FETCH_SUCCESS,
    USER_PROFILE_FETCH_FAIL,
    USER_PROFILE_FETCH,
    USER_PROFILE_FORM_FIELD_CHANGED,
    USER_PROFILE_UPDATE,
    USER_PROFILE_UPDATE_SUCCESS,
    USER_PROFILE_UPDATE_FAIL
} from 'actions/types';

const INITIAL_STATE = {
    accountData: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        image: '',
        location: '',
        preferences: null
    },
    attendingEvents: null,
    followingEvents: null,
    hostingEvents: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_PROFILE_FETCH:
            return {...state, loading: true };
        case USER_PROFILE_FETCH_FAIL:
            return {...state, loading: false, error: action.payload };
        case USER_PROFILE_FETCH_SUCCESS:
            return {...state, accountData: action.payload, loading: false };
        case USER_PROFILE_FORM_FIELD_CHANGED:
            return {...state, accountData: {...state.accountData,
                [action.payload.fieldName]: action.payload.text}};
        case USER_PROFILE_UPDATE:
            return {...state, loading: true };
        case USER_PROFILE_UPDATE_FAIL:
            return {...state, loading: false, error: action.payload};
        case USER_PROFILE_UPDATE_SUCCESS:
            return {...state, accountData: action.payload, loading: false};
        default:
            return state;
    }
};