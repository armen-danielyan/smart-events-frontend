'use strict';

import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import { orgSingleFetch, orgEventsFetch, orgFollow } from 'actions/OrgActions';
import config from 'config';
import EventItem from 'components/events/EventItem';
import Theme from 'config/Theme';
import { Actions } from 'react-native-router-flux';

import Button from 'components/common/Button';
import Spinner from 'components/common/Spinner';

const {toolbarHeight, tabBarTextStyle, tabBarUnderlineStyle, 
	topTabBarTab} = Theme.topTabBarView;
const tabBarProps = {
	initialPage: 0,
	tabBarTextStyle: tabBarTextStyle,
	tabBarUnderlineStyle: tabBarUnderlineStyle,
	style: {marginTop: toolbarHeight}
};

class OrgProfile extends Component {
	componentWillMount() {
		const orgId = this.props.navigationState.id;
		this.props.orgSingleFetch(orgId);
		this.props.orgEventsFetch(orgId);
	}

 	renderEvents = (events) => {
		if(!events) {
				return(<Text>No events for the organization yet</Text>);
			}
			return(
				<ScrollView style={{paddingHorizontal: 10}}>
				 	{events.map((event, key) => (
					<EventItem event={event} key={key} />
					))}
				</ScrollView>
			);
	}

	createEvent = (orgId) => {Actions.createEvent({orgId})};

	renderButton = ({orgData}) => {
		const {role, id} = orgData;
		if( role == 2 ) {
			return (
				<View style={{alignSelf: 'flex-end', right: 10, top: 20, 
					position: 'relative', zIndex: 1000}}>
				<Button title={'Following'} size={100} disabled={true} />
				</View>
			);
		} else if (role == 1) {
			return (
				<TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 10, 
					borderWidth: 1, position: 'relative', top: 20, right: 10, 
					alignSelf: 'flex-end'}}
					onPress={this.editOrganization.bind(this, role, id)}>
					<Text>Edit</Text>
				</TouchableOpacity>
			);
		} else {
			return (
				<View style={{alignSelf: 'flex-end', right: 10, top: 20, 
					position: 'relative', zIndex: 1000}}>
				<Button title={'Follow'} size={100} 
				onPress={this.followOrganization.bind(this, id)}/>
				</View>
			);
		}
	};
	
	editOrganization = (role, id) => {Actions.updateOrg({orgData: {role, id}})};

	followOrganization = (id) => {
		this.props.orgFollow(id);
	};

	renderAddEventBlock = (role, orgId) => {
		if(role == 1) {
			return(
				<TouchableOpacity onPress={this.createEvent.bind(this, orgId)}>
					<Text style={{padding: 10, borderRadius: 50, color: '#4A6BAA'}}> 
						+ Create Event
					</Text>
				</TouchableOpacity>
			);
		}
		return null;
	};

	render() {
		console.log('orororor', this.props.orgData);
		const { orgData } = this.props;
		if(!orgData) {
    		return(<Spinner size = "large" />);
    	}
		return(
			<ScrollView style={{flexDirection: 'column', marginTop: 50}}>
			 <View style={{height: 120}}>
				{this.renderButton(this.props)}
				 <Image source={{uri: config.HOST+'orgs/'+orgData.image}}
				 style={{height: 100, width: null, resizeMode: 'contain'}} />
						 <View style={{flexDirection: 'column'}}>
							<Text style={{alignSelf: 'center', fontSize: 17, color: '#4A6BAA'}}>
								{orgData.name}
							</Text>
							<View style={{flexDirection: 'row', alignSelf: 'center',}}>
								<View>
									<Text>
										Location: {orgData.location}</Text>
								</View>
							</View>
						</View>
			 </View>
			 <ScrollableTabView
			 	{...tabBarProps}
				renderTabBar={() =>
				<ScrollableTabBar style={topTabBarTab} />}>
					<View tabLabel='EVENTS'>
						{this.renderAddEventBlock(orgData.role, orgData.id)}
					 	{this.renderEvents(this.props.events)}
					</View>
					<View tabLabel='USERS'>
						<Text> Users </Text>
					</View>
				</ScrollableTabView>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({org}) => {
	let events = []
	if(org.events && org.events[0]) {
		events = _.map(org.events[0].data, (val) => {
			return { ...val};
	 });
	}
	let orgData = _.cloneDeep(org.selectedOrg);
	 return { events, orgData: orgData[0] };
};

export default connect(mapStateToProps, { orgSingleFetch, orgEventsFetch, orgFollow })(OrgProfile);