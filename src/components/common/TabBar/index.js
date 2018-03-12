'use strict';

import React from 'react';
import { View } from 'react-native';
import Button from 'components/common/Button';
import COLORS from 'config/colors';
import styles from './styles';

const TabBar = ({ items,  activeItem}) => {
    const {tabContainer} = styles;
    return (
        <View style={tabContainer} >
            <Button title='Attending' keyId='attending' 
                btnStyles={{color: COLORS.fontColor}} />
            <Button title='Upcoming' keyId='upcoming' 
                bgColor={COLORS.menuBg}
                btnStyles={{color: COLORS.white}} />
            <Button title='Popular' keyId='polular' 
                btnStyles={{color: COLORS.fontColor}} />
        </View>
    );
};

export default TabBar;
