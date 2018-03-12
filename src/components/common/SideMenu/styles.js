'use strict';

import { StyleSheet, Platform } from 'react-native';
import COLORS from 'config/colors';

const styles = StyleSheet.create({
	menuContainer: {
		flex: 1,
		backgroundColor: COLORS.backgroundColor,
		borderRightWidth: 0.8,
		borderColor: '#d6d7da'
	},
	menuItemContainer: {
		flex: 1, 
		flexDirection: 'row',
		marginLeft: 30,
		height: 40,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: COLORS.white
	},
	titleStyle: {
		fontSize: 14,
		fontFamily: 'HelveticaNeue-Light',
		paddingLeft: 15,
		alignSelf: "center",
		color: COLORS.fontColor,
		letterSpacing: -0.5,
		fontWeight: '500'

	},
	headerContainer: {
		height: 150
	},
	headerWrapper: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginLeft: 35
	},
	headerImage: {
		alignSelf: 'flex-start',
		...Platform.select({
			ios: {
				marginTop: 20,
			},
			android: {
				marginTop: 10,
			},
		}),
	},
	headerText: {
		flexDirection: 'row',
		paddingTop: 5,
		alignSelf: 'flex-start',
	},
	name: {
		color: COLORS.white, 
		backgroundColor: 'transparent',
		fontWeight: '400',
		fontSize: 18,
		marginTop: 10,
		paddingBottom: 5,
	},
	email: {
		backgroundColor: 'transparent',
		color: COLORS.white
	},
	separator: {
		height: 3,
		width: 50,
		backgroundColor: COLORS.yellow
	},
	logoutBtn: {
		marginBottom: 30,
		marginLeft: 20
	}
});

export default styles;