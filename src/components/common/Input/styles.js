'use strict';
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 14,
		...Platform.select({
			ios: {
				height: 30,
			},
			android: {
				height: 38,
				lineHeight: 40,
			},
		}),
		flexGrow: 1
	},
	labelStyle: {
		fontSize: 14,
		alignSelf: 'center',
		flex: 1
	},
	containerStyle: {
		margin: 4,
		marginHorizontal: 15,
		position: 'relative',
		flexDirection: 'column',
		...Platform.select({
			ios: {
				borderBottomWidth: 0.5,
				borderColor: 'gray',
			},
			android: {
				height: 40,
			},
		}),
	},
	multiLine: {
		height: 80, 
		borderColor: 'gray', 
		borderWidth: 0.5
	},
	placeholderStyle: {
		position: 'relative',
		fontSize: 10,
		color: '#6d6c6c'
	}
});

export default styles;