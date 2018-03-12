import {
	ORG_UPDATE,
	ORG_UPDATE_FORM,
	ORG_CREATE,
	ORGS_FETCH_SUCCESS,
	ORGS_SAVE_SUCCESS,
	ORG_DATA_FETCH_SUCCESS,
	ORG_EVENTS_FETCH_SUCCESS,
	ORG_FORM_FIELD_CHANGED,
	CLEAN_ORG_FORM,
	ORG_FETCH,
	ORG_FETCH_FAILURE,
	ORG_FOLLOW_CHAGE
} from 'actions/types';

const INITIAL_STATE = {
	data: {
		name: '',
		description: '',
		image: null,
		contactInfoEmail: '',
		contactInfoPhone: '',
		location: '',
		following: false
	},
	events: [],
	list: {},
	selectedOrg: [],
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ORG_FETCH:
			return {...state, loading: true };
		case ORGS_FETCH_SUCCESS:
			return {...state, list: action.payload };
		case ORG_EVENTS_FETCH_SUCCESS:
			return {...state, events: action.payload };
		case ORG_DATA_FETCH_SUCCESS:
			return {...state, selectedOrg: action.payload};
		case CLEAN_ORG_FORM:
			return { ...state, selectedOrg: [], data: {}};
		case ORG_FORM_FIELD_CHANGED:
			return { ...state, data: {...state.data, 
				[action.payload.fieldName]: action.payload.text} };
		case ORG_UPDATE_FORM:
			if(action.payload.contactInfo) {
				const {email, phone} = JSON.parse(action.payload.contactInfo);
				return { ...state, data: {...action.payload, 
					contactInfoEmail:email, contactInfoPhone: phone} };
			}
			return { ...state, data: action.payload };
		case ORG_FOLLOW_CHAGE:
			return {...state, data: {...state.data, following: action.payload }};
		default:
			return state;
	}
};