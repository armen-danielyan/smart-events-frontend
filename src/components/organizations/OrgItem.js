
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Spinner from 'components/common/Spinner';
import config from 'config';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from './styles';

class OrgItem extends Component {
	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.events != this.props.events) {
	//       this._renderContent(nextProps.events);
	//     }
	// };

  goToOrg(org) {
  	Actions.orgProfile(org);
  }

  renderHeader(section) {
    return (
    	<TouchableOpacity onPress={this.goToOrg.bind(this, section)}>
	      <View style={[styles.header, styles.inactive]} >
	        <View style={{flexDirection: 'row'}}>
	          <Image source={{uri: config.HOST+'orgs/'+section.image}} 
	            style={styles.logo}/>
	          <View style={{flexDirection: 'column'}}>
	            <Text style={styles.logoTitle}>
	              {section.name}
	            </Text>
	            <View style={{flexDirection: 'row'}}>
	              <View style={styles.detailInfo}>
	                <Text style={styles.detailText}>
	                {section.eventsCount}</Text>
	                <Text style={styles.detailText}>Events</Text>
	              </View>
	              <View style={styles.detailInfo}>
	                <Text style={styles.detailText}>
                        {section.followersCount}
                    </Text>
	                <Text style={styles.detailText}>Followers</Text>
	              </View>
	            </View>
	          </View>
	        </View>
	      </View>
	     </TouchableOpacity>
    );
  }

  render() {
  	const { org } = this.props
  	return(
  		<View>
  			{ this.renderHeader(org) }
  		</View>
  	)
  };
}

export default OrgItem;
