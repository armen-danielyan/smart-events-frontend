'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import config from 'config';

import styles from './styles';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { containerStyle, labelStyle } = styles;

class Location extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.initialValue)
            return null;
        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{this.props.label}</Text>
                <View style={{flex: 3}}>
                    <GooglePlacesAutocomplete
                        minLength={2}
                        autoFocus={false}
                        listViewDisplayed='auto'
                        fetchDetails={true}
                        renderDescription={(row) => row.description}
                        onPress={(data, details = null) => {
                            this.props.dataSelected(data.description);
                        }}
                        getDefaultValue={() => {
                            return this.props.initialValue;
                        }}
                        query={{
                            key: config.GOOGLE_PLACES_API_KEY,
                            language: 'en',
                            types: '(cities)',
                        }}
                        styles={{
                            container: {
                                padding: 0

                            },
                            description: {
                                fontWeight: 'bold',
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                            textInput: {
                                fontSize: 12,
                                flex: 3,
                                textAlign: 'right',
                                fontWeight: 'bold',
                                height: 40,
                                color: '#434a59',
                                marginTop: 0,
                                marginBottom: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                borderRadius: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                            },
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                padding: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                borderTopWidth: 0,
                                borderBottomWidth: 0
                            }
                        }}
                        currentLocation={false}
                        currentLocationLabel="Current location"
                        nearbyPlacesAPI='GooglePlacesSearch'
                        GoogleReverseGeocodingQuery={{}}
                        GooglePlacesSearchQuery={{
                            rankby: 'distance'
                        }}
                        enablePoweredByContainer={false}
                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                        debounce={200}/>
                </View>
            </View>

        );
    }
};

export default Location;