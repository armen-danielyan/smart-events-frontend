 'use strict';

import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import Avatar from 'components/common/Avatar';
import Button from 'components/common/Button';

import styles from './styles';

const {headerContainer, headerWrapper, headerImage,
 headerText, name, email, separator} = styles;

class MenuHeader extends Component {
	
	onPress(path) {
		Actions[path]();
		this.context.drawer.close();
	}

	renderHeaderText() {
		const { user, isAuth } = this.props;
		if(isAuth && user) {
			return(
				<TouchableOpacity onPress={this.onPress.bind(this, 'profile')}>
					<Text style={name}> {user.firstName+' '+user.lastName || null }</Text>
					<View style={separator}></View>
					<Text style={email}> {user.email }</Text>
				</TouchableOpacity>
			);
		}

		return(
			 <View style={headerText}>
			 	<Button title={'Log in'} 
			 		onPress={this.onPress.bind(this, 'login')} type={'secondary'} />
			 	<Button title={'Sign up'} 
			 		onPress={this.onPress.bind(this, 'register')} type={'secondary'} />
      		</View>
		);
	}

	render() {
		return (
		    <LinearGradient colors={['#323052', '#268651']} style={headerContainer}>
		      <View style={headerWrapper}>
		      	<Avatar user={this.props.user} isAuth ={this.props.isAuth} 
		      		style={headerImage}/>
		      		{this.renderHeaderText()}
		      </View>
		    </LinearGradient>
		);
	}
}

MenuHeader.contextTypes = {
        drawer: React.PropTypes.object
};

export default MenuHeader;