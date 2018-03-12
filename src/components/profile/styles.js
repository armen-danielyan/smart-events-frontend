'use strict';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    userPicture: {
        aspectRatio: 1,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        margin: 10
    },
    userSubs: {
        flexDirection: 'row',
        marginTop: 20
    },
    userSubsItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    userSubsValue: {
        fontSize: 16,
        color: '#375cb1',
        fontWeight: 'bold'
    },
    userSubsType: {
        fontSize: 12,
        color: '#375cb1'
    },
    userName: {
        fontSize: 26,
        color: '#375cb1'
    },
    userLoc: {
        fontSize: 12,
        color: '#375cb1'
    },
    userInterests: {
        alignSelf: 'stretch',
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    userInterestsItems: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    userInterestsItem: {
        margin: 4,
        borderRadius: 16,
        alignItems: 'center',
        fontSize: 12,
        color: '#777777',
        borderWidth: 1,
        borderColor: '#777777',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    backgroundImage: {
        width: null,
        flex: 1,
        resizeMode: 'stretch',
        marginTop: 64
    },
    body: {
        backgroundColor: '#e8e8ea',
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: 64,
        position: 'relative'
    },
    avatarWrap: {
        backgroundColor: '#2c5b51',
        height: 100,
    },
    section: {
        backgroundColor: '#ffffff',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    manageInterests: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    titleInterests: {
        fontSize: 12,
        flex: 5,
        color: '#777777'
    },
    addInterests: {
        flex: 1
    }


});

export default styles;