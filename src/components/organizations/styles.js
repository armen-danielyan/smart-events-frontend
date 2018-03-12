'use strict';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5FCFF',
	},
	title: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '300',
		marginBottom: 20,
	},
	header: {
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
	headerText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
	},
	content: {
		padding: 20,
		backgroundColor: '#fff',
		minHeight: 20
	},
	active: {
		backgroundColor: 'rgba(255,255,255,1)',
	},
	inactive: {
		backgroundColor: 'rgba(245,252,255,1)',
	},
	selectors: {
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	selector: {
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
	activeSelector: {
		fontWeight: 'bold',
	},
	selectTitle: {
		fontSize: 14,
		fontWeight: '500',
		padding: 10,
	},
	logo: {
		width: 55,
		height: 55,
		resizeMode: 'cover', 
		marginRight: 15
	},
	logoTitle: {
		color: '#002C95',
		fontWeight: 'bold',
		fontSize: 16
	},
	detailInfo: {
		alignItems: 'center',
		margin: 5
	},
	detailText: {
		color: '#002C95',
		fontSize: 12
	}
});

export default styles;