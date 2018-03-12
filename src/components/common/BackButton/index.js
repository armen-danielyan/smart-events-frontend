'use strict';

import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = () => {
        if(Platform.OS == 'ios'){
            return <Icon name={'ios-arrow-back'} size={30} color = '#ffffff' />
        } else {
            return <Icon name={'md-arrow-back'} size={30} color = '#ffffff' />
        }
};

export default BackButton;
