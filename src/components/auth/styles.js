'use strict';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	errorTextStyle: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'red',
        marginBottom: 20
    },
    loginContainer: {
    	position: 'relative',
        top: 150,
    	flex: 1,
        zIndex: 100
    },
    avatar: {
        alignSelf: 'center', 
        position: 'relative', 
        top: 20, 
        zIndex: 120,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    submitBtn: {
        flexDirection: 'column',
        flex: 1
    }
});

export default styles;