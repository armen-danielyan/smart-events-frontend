'use strict';

import { Platform } from 'react-native';
import COLORS from 'config/colors'
const platform = Platform.OS;
// Need to add variables of colors, size for easy customization

export default {
	navigationBar: {
		leftButtonStyle: {
			width: 20,
			height: 17
		},
		rightButtonStyle: {
			width: 20,
			height: 20
		},
		title: {
			color: COLORS.menuActive
		}
	},
	topTabBarView: {
		toolbarHeight: (platform === 'ios') ? 54 : 64,
		tabBarTextStyle: {
			color: COLORS.fontColor,
			fontSize: 13
		},
		tabBarUnderlineStyle: {
			backgroundColor: '#00C6AE'
		},
		tabBarActiveTextStyle: {
			color: COLORS.menuActive
		},
		topTabBarTab: {
			shadowOffset: { width: 0, height: 2 },
	        shadowOpacity: 0.1,
	        shadowRadius: 2,
	        elevation: 1, 
		}	
	},
	leftMenu: {
		icons: {
			width: 20,
			height: 20, 
			resizeMode: 'stretch'
		}
	}
};