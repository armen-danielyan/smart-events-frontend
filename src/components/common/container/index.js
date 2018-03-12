'use strict';

import React from 'react';
import { View } from 'react-native';

import styles from './styles.js';


const Container = (props) => {
  return (
    <View style={styles.main}>
      {props.children}
    </View>
  );
};

export default Container;