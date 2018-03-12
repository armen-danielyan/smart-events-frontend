'use strict';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import config from 'config';
import { setHeaders } from 'config/Utils';
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
} from './types';

const ROOT_URL = config.HOST;

export const orgsMyFetch = () => {
  return (dispatch, getState) => {
    dispatch({type: ORG_FETCH});
    setHeaders(getState)
     .then((instance) => {
        instance.get(`${ROOT_URL}api/orgs/my`)
            .then((response) => {
              dispatch({ type: ORGS_FETCH_SUCCESS, payload: response.data });
            }).catch((error) => {
            dispatch({type: ORG_FETCH_FAILURE, payload: error});
            console.log(error);
          });
     });
  };
};

export const orgSingleFetch = (orgId) => {
  return (dispatch, getState) => {
    dispatch({type: ORG_FETCH});
    setHeaders(getState)
     .then((instance) => {
        instance.get(`${ROOT_URL}api/orgs/view/${orgId}`)
            .then((response) => {
              dispatch({ type: ORG_DATA_FETCH_SUCCESS, payload: response.data });
              dispatch({ type: ORG_UPDATE_FORM, payload: response.data[0] });
            }).catch((error) => {
              dispatch({type: ORG_FETCH_FAILURE, payload: error});
              console.log(error);
          });
     });
  };
};

export const orgEventsFetch = (orgId) => {
  return (dispatch, getState) => {
    setHeaders(getState)
      .then((instance) => {
        instance.get(`${ROOT_URL}api/orgs/events/${orgId}`)
          .then((response) => {
            const result = [{'parentId': orgId, data: response.data}];
            dispatch({ type: ORG_EVENTS_FETCH_SUCCESS, payload: result});
          }).catch((error) => {
            dispatch({type: ORG_FETCH_FAILURE, payload: error});
            console.log(error);
        });
      });
  };
};

const formatFormData = (data) => {
  let fd = new FormData();

  fd.append('name', data.name);
  fd.append('description', data.description);
  fd.append('location', data.location);
  fd.append('contactInfo', JSON.stringify({
    email: data.contactInfoEmail,
    phone: data.contactInfoPhone
  }));
  fd.append('image', JSON.stringify(data.image));
  return fd;
};

//Fix me
export const orgCreate = (data) => {
  return (dispatch, getState) => {
    dispatch({type: ORG_FETCH});
    setHeaders(getState)
      .then((instance) => {
        const fd = formatFormData(data);
         instance.post(`${ROOT_URL}api/orgs/create`, {data: fd})
          .then((response) => {
            dispatch({ type: ORG_CREATE, payload: response});
            dispatch({type: CLEAN_ORG_FORM});
            Actions.orglist();

          }).catch((error) => {
            dispatch({type: ORG_FETCH_FAILURE, payload: error});
            console.log(error);
        });
      });
  };
};

//Fix me
export const orgUpdate = (data) => {
  return (dispatch, getState) => {
    dispatch({type: ORG_FETCH});
    setHeaders(getState)
      .then((instance) => {
        const fd = formatFormData(data);
        instance.post(`${ROOT_URL}api/orgs/update/${data.id}`, {data: fd})
          .then((response) => {
            dispatch({ type: ORG_CREATE, payload: response});
            dispatch({type: CLEAN_ORG_FORM});
            Actions.orglist();
          }).catch((error) => {
            dispatch({type: ORG_FETCH_FAILURE, payload: error});
            console.log(error);
        });
      });
  };
};

export const cleanForm = () => {
  return {
    type: CLEAN_ORG_FORM
  };
};

export const fieldValueChanged = (typeName, text) => {
  return {
    type: ORG_FORM_FIELD_CHANGED,
    payload: {text: text, fieldName: typeName}
  };
};

export const orgFollow = (id) => {
  return (dispatch, getState) => {
    dispatch({type: ORG_FETCH});
    setHeaders(getState)
      .then((instance) => {
        instance.get(`${ROOT_URL}api/orgs/follow/${id}`)
          .then((response) => {
            dispatch({ type: ORG_FOLLOW_CHAGE, payload: response});
            Actions.pop();
          }).catch((error) => {
            dispatch({type: ORG_FETCH_FAILURE, payload: error});
            console.log(error);
        });
      });
  };
};

