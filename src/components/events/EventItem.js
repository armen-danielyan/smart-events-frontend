import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import config from 'config';
import CardSection from 'components/common/Card/CardSection';
import ImagePreload from 'components/common/ImagePreload';
import moment from 'moment';

import styles from './styles';

class EventItem extends Component {
	onRowPress(eventId) {
		Actions.eventDetail({ eventId: eventId });
	}

	formatDate(date) {
		return moment(date).format('MMMM DD, YYYY hh:mm');
	}

	formatTags(tags) {
		const formatedTags = (tags)? tags.split(', ')
			.map((tag)=>{return '#'+tag}).join(', '): '';
		return formatedTags;
	}

	render() {
		const eventItem = this.props.event;
		const { eventImage, eventDetails, eventHost, eventBlock, 
			eventTitle, eventDate, location} = styles;

		return (
			<CardSection>
				<TouchableOpacity onPress={this.onRowPress.bind(this, eventItem.id)}>
					<ImagePreload imagePath={config.HOST+'events/'+eventItem.image}
						style={eventImage} />
					<View style={eventDetails}>
						<Text style={eventTitle}>{eventItem.title}</Text>
						<View style={eventBlock}>
							<Text style={eventDate}>
								{this.formatDate(eventItem.startDate)}, {eventItem.location}
							</Text>
						</View>
						<Text style={eventHost}>
							by {eventItem.organizationName}
						</Text>
					</View>
				</TouchableOpacity>
			</CardSection>
		);
	}
}

export default EventItem;