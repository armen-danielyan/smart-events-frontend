import {
  CLEAN_AUTH_FORM,
  FIELD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER, 
  FETCH_CURRENT_USER,
  LOGOUT_USER
} from 'actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
  user: null,
  isAuth: false,
  token: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
	case CLEAN_AUTH_FORM:
	  return { ...state, loading: false, error: '', email: '', password: '',  passwordConfirm: ''};
	case FIELD_CHANGED:
	  return { ...state, [action.payload.fieldName]: action.payload.text };
	case LOGIN_USER:
	  return { ...state, loading: true, error: '' };
	case REGISTER_USER:
	  return { ...state, loading: true, error: '' };
	case LOGIN_USER_SUCCESS:
	  return { ...state, ...INITIAL_STATE, isAuth: true, token: action.payload };
	case FETCH_CURRENT_USER:
	  return { ...state, user: action.payload.user, isAuth: true, token: action.payload.token };
	case LOGIN_USER_FAIL:
	  return { ...state, error: 'Authentication Failed.', password: '', 
		loading: false, user: null, token : '' };
	case LOGOUT_USER:
	  return { ...state, user: null, isAuth: false, token: '' };
	default:
	  return state;
  }
};