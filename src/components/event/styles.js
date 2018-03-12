'use strict';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	headerImageContainer: {
		flex: 1, 
		marginTop: 50
	},
	headerImage : {
		width: null,
		height: 250,
		flexDirection: 'column',
		resizeMode: 'cover'
	},
	generalInfo: {
		backgroundColor: 'transparent',
		paddingLeft: 20
	},
	eventTitle: {
		color: '#ffffff',
		fontSize: 26,
		marginTop: 30	
	},
	whiteText: {
		color: '#ffffff'
	},
	buttonsContainer: {
		flex: 1,
		alignSelf: 'flex-end'
	},
	button: {
		fontSize: 14,
	  	borderWidth: 1,
	  	borderRadius: 14,
	  	padding: 6, 
	  	paddingLeft: 20,
	  	paddingRight: 20
	}
});

export default styles;