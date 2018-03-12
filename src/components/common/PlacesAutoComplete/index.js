'use strict';

import React, { Component } from 'react';
import config from 'config';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class PlacesAutoComplete extends Component {
	// componentWillMount() {
	// 	this.props.initialValue = this.props.initialValue || '';
	// };

  	render() {
  		//console.log('input fromcocmcmcmcmmc', this.props.initialValue);
  		//let initialValue = '' || this.props.initialValue;
	  	return(
			<GooglePlacesAutocomplete
		        placeholder='Location'
		        minLength={2}
		        autoFocus={false}
		        listViewDisplayed='auto'
		        fetchDetails={true}
		        renderDescription={(row) => row.description} 
		        onPress={(data, details = null) => {
		          this.props.dataSelected(data.description)
		        }}
		        getDefaultValue={() => {
		          return  this.props.initialValue;
		        }}
		        query={{
		          key: config.GOOGLE_PLACES_API_KEY,
		          language: 'en',
		          types: '(cities)',
		        }}
		        styles={{
		          description: {
		            fontWeight: 'bold',
		          },
		          predefinedPlacesDescription: {
		            color: '#1faadb',
		          },
		        }}
		        currentLocation={true}
		        currentLocationLabel="Current location"
		        nearbyPlacesAPI='GooglePlacesSearch'
		        GoogleReverseGeocodingQuery={{}}
		        GooglePlacesSearchQuery={{
		          rankby: 'distance'
		        }}
		        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
		        debounce={200} />
  	);
  }
}

export default PlacesAutoComplete;