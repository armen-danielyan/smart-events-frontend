'use strict';

import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import { orgsMyFetch } from 'actions/OrgActions';
import OrgList from './OrgList';
import Theme from 'config/Theme';

const {toolbarHeight, tabBarTextStyle, tabBarUnderlineStyle, topTabBarTab} = Theme.topTabBarView;
const tabBarProps = {
	initialPage: 0,
	tabBarTextStyle: tabBarTextStyle,
	tabBarUnderlineStyle: tabBarUnderlineStyle,
	style: {marginTop: toolbarHeight}
};

class OrganizationList extends Component {
	componentWillMount() {
		this.props.orgsMyFetch();

		//this.createDataSource(this.props);
	}

//   componentWillReceiveProps(nextProps) {
//     // nextProps are the next set of props that this component
//     // will be rendered with
//     // this.props is still the old set of props

//     this.createDataSource(nextProps);
//   }

	render() {
		const { orgs } = this.props;
		return(
			 <ScrollableTabView
			 {...tabBarProps}
				renderTabBar={() =>
				<ScrollableTabBar style={topTabBarTab} />}>
					<View tabLabel='HOSTING'>
						<OrgList orgs={orgs[0] || null }/>
					</View>
					<View tabLabel='FOLLOWING'>
						<OrgList orgs={orgs[1] || null}/>
					</View>
				</ScrollableTabView>
		);
	}
}

const mapStateToProps = ({org}) => {
	 const orgs = _.map(org.list, (val, uid) => {
		return { ...val, uid };
	});
	return { orgs };
};

export default connect(mapStateToProps, { orgsMyFetch })(OrganizationList);