'use strict';

import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Animated, } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { eventFetch, eventRegister } from 'actions/EventActions';
import Spinner from 'components/common/Spinner';
import Button from 'components/common/Button';
import config from 'config';
import MapView from 'react-native-maps';

import styles from './styles';

const { headerImageContainer, headerImage, generalInfo, eventTitle,
	whiteText, buttonsContainer } = styles;

//TODO: clean the structure and styles, make small reusable components
class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  };

	componentWillMount() {
		this.props.eventFetch(this.props.eventId);
  	};

  	renderHeaderImage(eventData) {
  		return(
	  		<Image source={{uri: config.HOST+'events/'+eventData.image}} 
	  			style={headerImage}>
	  			<View style={generalInfo}>
	  				<Text style={eventTitle}>
	  					{eventData.title}
	  				</Text>
	  				<View>
	  					<Icon name={'ios-time-outline'} size={16} style={whiteText}>
	  						<Text style={{fontSize: 14}}>
	  						{ moment(eventData.startDate).format('MMMM DD, YYYY')}
	  						</Text>
	  					</Icon>
	  					<Icon name={'ios-pin-outline'} size={16} style={whiteText}>
	  						<Text style={{fontSize: 14}}>{eventData.location}</Text>
	  					</Icon>
	  				</View>
	  				<View style={{flex: 1}}>
	  					<View style={buttonsContainer}>
	  						<Text style={{color: '#ffffff', fontSize: 14,
    	  						 borderColor: '#ffffff', borderWidth: 1, borderRadius: 14, padding: 6, 
    	  						 paddingLeft: 20, paddingRight: 20 }}>
	  						 Details
	  						</Text>
	  						<View style={{height: 10}}></View>
	  						<Text style={{color: '#00FFED', fontSize: 14,
    	  						 borderColor: '#00FFED', borderWidth: 1, borderRadius: 14, padding: 6, 
    	  						 paddingLeft: 20, paddingRight: 20}}>
                             View all
                             </Text>
	  					</View>
	  					<View style={{flex: 1}}>
                <TouchableOpacity onPress={this.goToOrg.bind(null, eventData.organizationId)}
                  style={{flexDirection: 'column'}}>
  	  						<Text style={{color: '#00FFED', fontSize: 12}}>Published by:  
                    <Text style={{color: '#ffffff', fontSize: 14, fontWeight: 'bold', 
                      paddingLeft: 5}}>
                     {eventData.organizationName}
                  </Text>
                  </Text>
                  
                </TouchableOpacity>
	  						<Text style={{color: '#00FFED', fontSize: 12}}>Channel of</Text>
	  					</View>
	  				</View>
	  			</View>
	  		</Image>
  		);
  	};

  	renderFollowersBlock() {
  		return(
	  		<View style={{backgroundColor: '#1D37A2', height: 50, flexDirection: 'row'}}>
	  			<View style={{flex: 1, marginLeft: 25, justifyContent: 'center'}}>
	  				<Text style={{color: '#ffffff'}}>5 Followers of the Channel</Text>
	  			</View>
	  			<View style={{flex: 1, marginRight: 25, justifyContent: 'center'}}>
	  				<Text style={{color: '#ffffff'}}>25 Attendees to the Event</Text>
	  			</View>
	  		</View>
  		);
  	};

  	renderDescriptionBlock(eventData) {
  		return(
  			<View style={{height: 100, backgroundColor: '#A0C1FF', paddingLeft: 10, paddingRight:10,
  				justifyContent: 'center'}}>
  				<Text style={{color: '#002C95', alignSelf: 'center'}}>{eventData.description}</Text>
  			</View>
  		);
  	};

  	renderRegisterBlock(eventData, user) {
      if(!user) {
        let registerHandler = () => {
          Actions.login({redirectPath: 'eventDetail', params: {eventId: eventData.id}});
        }
        return (
          <Button title='Register Now' onPress={registerHandler}/>
        );
      } else {
        const eventOwners = eventData.ownerId.split(', ');

        if(eventOwners.indexOf(user.id) == -1) {
          let registerHandler = () => {
            this.props.eventRegister(eventData.id);
          };
          return (
            <Button title='Register Now' onPress={registerHandler}/>
          );
        }
      }
  	};

    goToOrg = (id) => {
      Actions.orgProfile({id});
    };

    render() {
      const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });
    	const { eventData, user } = this.props;
      console.log(this.props);
    	if(!eventData) {
    		return(<Spinner size = "large" />);
    	}
        return (
        	<ScrollView style={headerImageContainer}>
        		{this.renderHeaderImage(eventData)}
        		{this.renderFollowersBlock(eventData)}
        		{this.renderDescriptionBlock(eventData)}
            <View style={{flex: 1, backgroundColor: '#002C95'}}>
              <MapView
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={{height: 200,
    marginVertical: 50,}}
              />
            </View>
             

        	</ScrollView>
        );
    };
};

const mapStateToProps = ({event, auth}) => {
	const eventData = _.cloneDeep(event.selectedEvent);
  const user = auth.user;
  //console.log(user)
  	return {eventData, user};
};
export default connect(mapStateToProps, { eventFetch, eventRegister })(EventDetail);