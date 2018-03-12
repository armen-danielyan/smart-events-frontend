'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
import EventForm from './EventForm'

class EventCreate extends Component {
	saveOrgData = () => {

	};
	
	render() {
	    return (
	    	<EventForm buttonTitle={'Create Event'} 
	    		orgId={this.props.navigationState.orgId} />
	    );
	}
}

// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm;

//   return { name, phone, shift };
// };
export default EventCreate;
//export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)