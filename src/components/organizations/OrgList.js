import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Spinner from 'components/common/Spinner';
import _ from 'lodash';

import OrgItem from './OrgItem';
import styles from './styles';

class OrgList extends Component {
	render() {
		const { orgs } = this.props;
		
		if(!orgs) {
			return (<Spinner size = "large" />);
		}
		const sections = _.filter(_.toArray(orgs), 
			(o) => (o.id));

		return (
			<ScrollView style={styles.container}>
			 {sections.map((selector, key) => (
					<OrgItem org={selector} key={key} />
				))}
			</ScrollView>
		);
	};
};

export default OrgList;