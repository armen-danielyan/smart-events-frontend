'use strict';

import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const LogoutButton = ({ user, isAuth, onPress }) => {
    if(user && isAuth) {
        return (
            <TouchableOpacity onPress={onPress}
                style={styles.logoutBtn}>
                <Icon name={'ios-power'} size={25} 
                    style={{width: 20, height: 20}} />
            </TouchableOpacity>
        );
    }
    return null;   
}

export default LogoutButton;