'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { eventCreate, cleanForm, fieldValueChanged } 
	from 'actions/EventActions';
import Input from 'components/common/Input';

import PlacesAutoComplete from 'components/common/PlacesAutoComplete';
import ImagePickerComp from 'components/common/ImagePicker';
import DatePickerComp from 'components/common/DatePicker'

import Button from 'components/common/Button';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';

class EventForm extends Component {

	saveEventData = () => {
		const {eventName, eventDescription, eventLocation, eventStartDate, 
					eventEndDate, eventImage, eventPrice,  eventMaxAttendants, 
					eventTags, orgId} = this.props;
		this.props.eventCreate({eventName, eventDescription, eventLocation, eventStartDate, 
					eventEndDate, eventImage, eventPrice,  eventMaxAttendants, eventTags, orgId});
	};

	onFieldValueChange(text, type) {
				this.props.fieldValueChanged(text, type);
	}
	
	render() {
		const {eventName, eventDescription, eventLocation, eventStartDate, 
					eventEndDate, eventImage, eventPrice,  eventMaxAttendants, eventTags} = this.props;
			return (
				<View style={{marginTop: 70, flex: 1, position: 'relative' }}>
					<KeyboardAwareScrollView ref='scroll' extraHeight={200} 
						enableResetScrollToCoords={true}>
						<View style={{flex: 1 }}>
							<Input 
							placeholder = "Event name"
									value = {eventName}
									onChangeText = {this.onFieldValueChange.bind(this, 'eventName')}/>
							 <Input
									placeholder="Tell us about the event"
									multiline = {true}
									numberOfLines={7}
									value={eventDescription}
									onChangeText = {this.onFieldValueChange.bind(this, 'eventDescription')}/>
							<PlacesAutoComplete 
								dataSelected = {this.onFieldValueChange.bind(this, 'eventLocation')}/>
							<View style={{marginTop: 10, flex: 1}}>
								<DatePickerComp placeholder={'Event start date'} 
									onDateSelected={this.onFieldValueChange.bind(this, 'eventStartDate')} 
									selectedDate={eventStartDate} />
								<DatePickerComp placeholder={'Event end date'} 
									onDateSelected={this.onFieldValueChange.bind(this, 'eventEndDate')} 
								selectedDate={eventEndDate} />
							 </View>
					 		<ImagePickerComp btnTitle={'Select Event Image'}
								imageSelected = {this.onFieldValueChange.bind(this, 'eventImage')} />
							<Input 
								placeholder = "Price"
								value = {eventPrice}
								onChangeText = {this.onFieldValueChange.bind(this, 'eventPrice')}/>
							 <Input 
								placeholder = "Maximum number of attendants"
								value = {eventMaxAttendants}
								onChangeText = {this.onFieldValueChange.bind(this, 'eventMaxAttendants')}/>
							 <Input 
								placeholder = "Event tags (e.g. #party, #cooking, #sports, #business)"
								value = {eventTags}
								onChangeText = {this.onFieldValueChange.bind(this, 'eventTags')}/>
						</View>
					</KeyboardAwareScrollView>
					<View style={{height: 60, justifyContent: 'center'}}>
						<Button title={this.props.buttonTitle} onPress={this.saveEventData.bind(this)} />
					</View>
				</View>
			);
	}
}

const mapStateToProps = ({event}) => {
	const {eventName, eventDescription, eventLocation, eventStartDate, 
			eventEndDate, eventImage, eventPrice,  eventMaxAttendants, eventTags} = event.data;

	return {eventName, eventDescription, eventLocation, eventStartDate, 
			eventEndDate, eventImage, eventPrice,  eventMaxAttendants, eventTags};
};
export default connect(mapStateToProps, 
	{ eventCreate, cleanForm, fieldValueChanged})(EventForm);