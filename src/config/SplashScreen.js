'use strict';

import SplashScreen from 'react-native-smart-splash-screen';

export default {
	init: function() {
		const splashImage = require('assets/images/splash.png');
		SplashScreen.close({
	        animationType: SplashScreen.animationType.scale,
	        duration: 850,
	        delay: 500,
	    });
	}
};
	     
