import { StyleSheet, Platform } from 'react-native'; 

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 20,
		alignSelf: 'center',
		position: 'absolute',
		left: 0,
		right: 0,
		flex: 1
	},
	titleWrapper: {
		marginTop: 10,
		position: 'absolute',
		...Platform.select({
			ios: {
				top: 13,
			},
			android: {
				top: 12,
			},
		}),
		left: 0,
		right: 0,
	},
	header: {
		backgroundColor: 'transparent',
		paddingTop: 0,
		top: 0,
		right: 0,
		left: 0,
		position: 'absolute',
	},
	headerSimple: {
		...Platform.select({
			ios: {
				height: 54,
			},
			android: {
				height: 64,
			}
		})
	},
	headerImage: {
		resizeMode: 'stretch',
		width: null,
		...Platform.select({
			ios: {
				height: 54,
			},
			android: {
				height: 64,
			},
		})
	},
	backButton: {
		height: 40,
		width: 50,
		position: 'absolute',
		...Platform.select({
			ios: {
				top: 10,
			},
			android: {
				top: 10,
			},
		}),
		left: 2,
		padding: 8,
		flexDirection: 'row',
	},
	rightButton: {
		height: 40,
		position: 'absolute',
		...Platform.select({
			ios: {
				top: 15,
			},
			android: {
				top: 10,
			},
		}),
		right: 2,
		padding: 8,
	},
	menuIcon: {
		width: 22, 
		height: 24,
		resizeMode: 'contain'
	},
	leftButton: {
		width: 70,
		height: 30,
		position: 'absolute',
		backgroundColor: 'transparent',
		...Platform.select({
			ios: {
				top: 15,
			},
			android: {
				top: 12,
			},
		}),
		left: 2,
		padding: 8,
	},
	image: {
		width: 40,
		height: 32
	},
	searchButton: {
		width: 30,
		height: 25,
		position: 'absolute',
		backgroundColor: 'transparent',
		...Platform.select({
			ios: {
				top: 22,
			},
			android: {
				top: 10,
			},
		}),
		right: 40,
		padding: 8,
	},
	logo: {
		width: 120,
		height: 20, 
		resizeMode: 'stretch',
		flex: 1,
		alignSelf: 'center',
		justifyContent: 'center',
	}
});

export default styles;