'use strict';
import { StyleSheet, Platform } from 'react-native';
import COLORS from 'config/colors';

const styles = StyleSheet.create({
	btnStyle: {
		paddingHorizontal: 12,
		paddingVertical: 10, 
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 80,
		flexDirection: 'row'
	},
	titleStyle: {
		color: '#002C95',
		alignSelf: 'center',
		fontFamily: 'HelveticaNeue-Light'
	},
	secondary: {
		color: COLORS.white,
		backgroundColor: COLORS.menuBg,
		borderRadius: 7,
		paddingVertical: 10,
		paddingHorizontal: 12,
		fontWeight: '500'
	},
	bgStyle: {
		...Platform.select({
			ios: {
				borderRadius: 40,
			},
			android: {
				borderRadius: 7
			},
		}),
	},
	primary: {
		backgroundColor: COLORS.green,
		color: COLORS.yellow,
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 12,
		fontWeight: '500',
		fontSize: 16,
		textAlign: 'center'
	}
});

export default styles;
