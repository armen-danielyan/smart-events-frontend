'use strict';

import { Image, PixelRatio } from 'react-native';
import React from 'react';
import config from 'config';

const Avatar = ({ user, isAuth, style, decSize, type }) => {
    const size = decSize || 60;
    const scaledSize = size * PixelRatio.get();
    const uri = ((user && isAuth) && type != 'default') ? 
        {uri: config.HOST+'profiles/'+user.image} : 
        require('assets/images/avatar.png');

   return (
     <Image
        source={uri}
        style={[{
          width: size,
          height: size,
          borderRadius: size / 2,
          resizeMode: 'stretch',
        }, style]}
      />
    );
};

export default Avatar;