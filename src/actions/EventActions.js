'use strict';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import config from 'config';
import { setHeaders } from 'config/Utils';
import {
  EVENT_UPDATE,
  EVENT_CREATE,
  EVENTS_FETCH_SUCCESS,
  EVENT_SAVE_SUCCESS,
  EVENT_DATA_FETCH_SUCCESS,
  EVENT_FORM_FIELD_CHANGED,
  CLEAN_EVENT_FORM,
  EVENT_REGISTER
} from './types';

const ROOT_URL = config.HOST;

export const eventsFetch = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}api/events/list`)
	 .then((response) => {
	   dispatch({ type: EVENTS_FETCH_SUCCESS, payload: response.data });
	 }).catch((error) => {
	    console.log(error);
	  });
  };
};

export const eventFetch = (eventId) => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}api/events/view/${eventId}`)
	 .then((response) => {
	   dispatch({ type: EVENT_DATA_FETCH_SUCCESS, payload: response.data[0] });
	 }).catch((error) => {
	 console.log(error);
    });
  };
};

//Fix me
export const eventCreate = (data) => {
  return (dispatch, getState) => {
    setHeaders(getState)
	 .then((instance) => {
	   let fd = new FormData();

	   fd.append('title', data.eventName);
	   fd.append('description', data.eventDescription);
	   fd.append('location', data.eventLocation);
	   fd.append('startDate', data.eventStartDate);
	   fd.append('endDate', data.eventEndDate);
	   fd.append('image', JSON.stringify(data.eventImage));
	   fd.append('price', data.eventPrice);
	   //fd.append('tags', data.eventTags);
	   fd.append('maxAttendees', data.eventMaxAttendants);
	   fd.append('organizationId', data.orgId);
	   console.log('datatatatata', data);
	    instance.post(`${ROOT_URL}api/events/create`, {data: fd})
		.then((response) => {
		  dispatch({ type: EVENT_CREATE, payload: response});
		  dispatch({type: CLEAN_EVENT_FORM});
		  Actions.orglist();

		}).catch((error) => {
		console.log(error);
	   });
	 });
  };
};

// //Fix me
// export const orgUpdate = (data) => {
//   return (dispatch, getState) => {
//     setHeaders(getState)
//       .then((instance) => {
//         instance.get(`${ROOT_URL}api/orgs/events/${orgId}`)
//           .then((response) => {
//             const result = [{'parentId': orgId, data: response.data}];
//             dispatch({ ORG_CREATE, payload: result});
//           }).catch((error) => {
//           console.log(error);
//         });
//       });
//   };
// };

export const eventRegister = (eventId) => {
     return (dispatch, getState) => {
    setHeaders(getState)
     .then((instance) => {
        instance.post(`${ROOT_URL}api/events/regsiter/${eventId}`)
        .then((response) => {
            console.log('ressss', response.data);
          dispatch({ type: EVENT_REGISTER, payload: response.data});
          Actions.ticket({eventId});

        }).catch((error) => {
        console.log(error);
       });
     });
  };
};

export const cleanForm = () => {
  return {
    type: CLEAN_EVENT_FORM
  };
};

export const fieldValueChanged = (typeName, text) => {
  return {
    type: EVENT_FORM_FIELD_CHANGED,
    payload: {text: text, fieldName: typeName}
  };
};