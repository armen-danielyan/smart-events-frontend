'use strict';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	inputStyle: {
		fontSize: 12,
        flex: 3,
        textAlign: 'right',
        fontWeight: 'bold',
        height: 40,
        color: '#434a59'
	},
	labelStyle: {
		fontSize: 12,
		flex: 2,
		color: '#777777'
	},
	containerStyle: {
		flexDirection: 'row',
		alignItems: 'center'
	},
    separator: {
	    borderBottomWidth: 1,
        borderBottomColor: '#e8e8ea'
    },
    avatar: {
        height: 120,
        borderRadius: 60,
        aspectRatio: 1,
        resizeMode: 'cover',
        borderWidth: 6,
        borderColor: '#e8e8ea'
    }
});

export default styles;