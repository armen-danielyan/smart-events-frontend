'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { connect } from 'react-redux';
//import { cleanForm, fieldValueChanged } from 'actions/OrgActions';
import Input from 'components/common/Input';

import PlacesAutoComplete from 'components/common/PlacesAutoComplete';
import ImagePickerComp from 'components/common/ImagePicker';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import config from 'config';

class OrganizationForm extends Component {

	onFieldValueChange(text, type) {
		//this.props[type] = text;
		//console.log('text, type', text, type);
		this.props.onValueChange(text, type);
	}
	
	render() {
		const image  = (this.props.image)? ({uri: config.HOST+'orgs/'+this.props.image}): null;
			return (
				<KeyboardAwareScrollView ref='scroll' extraHeight={200} 
					enableResetScrollToCoords={true}>
					<View style={{flex: 1 }}>
						<Input 
							placeholder = "Organization name"
							value = {this.props.name}
							onChangeText = {this.onFieldValueChange.bind(this, 'name')}/>
						 <Input
							placeholder="Tell us about the organization"
							multiline = {true}
							numberOfLines={7}
							value={this.props.description}
							onChangeText = {this.onFieldValueChange.bind(this, 'description')}/>
						
						<Input
							placeholder="Contact Email"
							value={this.props.contactInfoEmail || null}
							onChangeText = {this.onFieldValueChange.bind(this, 'contactInfoEmail')}/>
						<Input
							placeholder="Contact Phone"
							value={this.props.contactInfoPhone || null}
							onChangeText = {this.onFieldValueChange.bind(this, 'contactInfoPhone')}/>
						<PlacesAutoComplete 
							initialValue={this.props.location}
							dataSelected = {this.onFieldValueChange.bind(this, 'location')}/>
						<ImagePickerComp btnTitle={'Select Logo Image'}
							initialValue = {image}
							imageSelected = {this.onFieldValueChange.bind(this, 'image')}/>
					</View>
				</KeyboardAwareScrollView>
			);
	}
}

export default OrganizationForm;