'use strict';
import React, { Component } from 'react';
import { View, Text,  Image, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

class DatePickerComp extends Component {
	render() {
		const { placeholder, onDateSelected, selectedDate } = this.props;

		return (
			<DatePicker
		        style={{flex: 1,  alignSelf: 'stretch', width: null, marginBottom: 10}}
		        mode='datetime'
		        date={selectedDate}
		        placeholder={placeholder}
		        format='YYYY-MM-DD hh:mm'
		        confirmBtnText="Confirm"
		        cancelBtnText="Cancel"
		        customStyles={{
					dateIcon: {
						overflow: 'hidden',
						width: 0,
						height: 0
					},
		        	dateInput: {
		        		marginLeft: 10
		          	}
		        }}
		    	onDateChange={(date) => {onDateSelected(date)}}
		      />
		);
	}
};

export default DatePickerComp;