'use strict';

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Theme from 'config/Theme';
import styles from './styles';


class MenuItem extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			drawer: context.drawer
		}
	};

	onRowPress() {
		Actions[this.props.menuItem['urlPath']]();
		this.state.drawer.close();
	}

	render() {
		const menuItem  = this.props.menuItem;

		return (
		  <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
		    <View>
		      <View style={styles.menuItemContainer}>
		      	<Image source={menuItem.icon} style={Theme.leftMenu.icons} />
		        <Text style={styles.titleStyle}>
		          {menuItem.title.toUpperCase()}
		        </Text>
		      </View>
		    </View>
		  </TouchableWithoutFeedback>
		);
	}
}

MenuItem.contextTypes = {
        drawer: React.PropTypes.object
};

export default MenuItem;