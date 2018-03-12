import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import EventReducer from './EventReducer';
import OrgReducer from './OrgReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
	auth: AuthReducer,
	event: EventReducer,
	org: OrgReducer,
    profile: ProfileReducer
});