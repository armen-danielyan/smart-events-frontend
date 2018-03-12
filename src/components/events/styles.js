'use strict';

import { StyleSheet, Platform } from 'react-native';
import COLORS from 'config/colors';
import Theme from 'config/Theme';

const {toolbarHeight} = Theme.topTabBarView;

const styles = StyleSheet.create({
	mainContainer: {
		marginTop: toolbarHeight
	},
	eventImage: {
		flex: 1, 
		width: null,
		height: 150,
		flexDirection: 'row',
		resizeMode: 'stretch'
	},
	eventDetails: {
		paddingLeft: 15,
		flex: 1,
		paddingTop: 10,
		backgroundColor: COLORS.white,
	},
	eventHost: {
		color: COLORS.fontColor,
		paddingBottom: 10
	},
	eventBlock: {
		flexDirection: 'column',
		backgroundColor: 'transparent'
	},
	eventTitle: {
		color: COLORS.boldColor,
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'Helvetica Neue',
	},
	eventDate: {
		color: COLORS.fontColor,
		fontSize: 14,
	}
});

export default  styles;