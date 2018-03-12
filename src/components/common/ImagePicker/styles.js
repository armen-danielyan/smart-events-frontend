'use strict';
import { StyleSheet, PixelRatio } from 'react-native';

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    height: 350,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF'
	},
	avatarContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	avatar: {
		width: 150,
		height: 150,
		resizeMode: 'stretch'
	}
});