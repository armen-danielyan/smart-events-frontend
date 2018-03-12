import {
	EVENT_DATA_FETCH_SUCCESS,
	EVENTS_FETCH_SUCCESS, 
	EVENT_CREATE,
	EVENT_SAVE_SUCCESS,
	EVENT_FORM_FIELD_CHANGED,
	CLEAN_EVENT_FORM,
	EVENT_REGISTER
} from 'actions/types';

const INITIAL_STATE = {
	data: {
		eventName: '',
		eventDescription: '',
		eventLocation: '',
		eventStartDate: '',
		eventEndDate: '',
		eventImage: null,
		eventPrice: '',
		eventMaxAttendants: '',
		eventTags: ''
	},
	ticket: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EVENTS_FETCH_SUCCESS:
			return {...state, list: action.payload };
		case EVENT_DATA_FETCH_SUCCESS:
			return {...state, selectedEvent: action.payload};
		case CLEAN_EVENT_FORM:
			return { ...state, data: INITIAL_STATE };
		case EVENT_FORM_FIELD_CHANGED:
			return { ...state, data: {...state.data, 
				[action.payload.fieldName]: action.payload.text} };
		case EVENT_REGISTER:
			return {...state, ticket: action.payload};
		default:
			return state;
	}
};