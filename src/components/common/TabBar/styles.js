'use strict';

import { StyleSheet, Platform } from 'react-native';
import Theme from 'config/Theme';

const {toolbarHeight } = Theme.topTabBarView;

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: toolbarHeight
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around', 
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0,
            height: 2 
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1
    }
});

export default styles;