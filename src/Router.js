import React, { Component } from 'react';
import { Scene, Router, Actions } 
	from 'react-native-router-flux';

import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import { requireAuthentication } from 'components/auth/Authenticate';
import EventFeed from 'components/events';
import EventDetail from 'components/event';
import Profile from 'components/profile';
import OrganizationList from 'components/organizations';
import OrganizationCreate from 'components/organization/OrgCreate';
import OrganizationUpdate from 'components/organization/OrgUpdate';
import OrgProfile from 'components/organization/OrgProfile';
import EventCreate from 'components/event/EventCreate';

import SideMenu from 'components/common/SideMenu';

import Theme from 'config/Theme';
import NavBarCustom from 'components/common/NavBar';

const addIcon = require('assets/images/add.png');
const headerImage = require('assets/images/header.png');
const {styles, leftButtonStyle, rightButtonStyle, title} = Theme.navigationBar;


class RouterComponent extends Component {

	render() {
		const onRight = () => {};
		const onLeft = ()=> {Actions.refresh({key:'leftMenu', open: true})};
		const createOrganization = () => {Actions.createOrg()};

		const navBarProps = {
			navigationBarBackgroundImage: headerImage,
			navigationBarBackgroundImageStyle: {
				resizeMode: 'cover',
				width: null,
				height: 100
			},
			titleStyle: title,
			onLeft: onLeft,
			onRight: onRight
		};

		return(
			<Router>
				 <Scene key="leftMenu" component={SideMenu} open={false} 
				 	direction="leftToRight" parent="root">
					<Scene key="main" {...navBarProps} navBar={ NavBarCustom } >
						<Scene key="eventFeed" title="Events" 
							component={EventFeed} initial/>
						<Scene key="eventDetail" title="Event Details" component={EventDetail} />
						<Scene key="login" title="Sign In" component={Login} bgColor='transparent' />
						<Scene key="register" title="Sign Up" component={Register} />
						<Scene key="profile" title="Profile" 
							component={requireAuthentication(Profile)}/>
						<Scene key="orglist" title="Organizations"
							component={requireAuthentication(OrganizationList)} 
							onSecondRight={createOrganization} secondRight={addIcon}/>
						<Scene key="createOrg" title="Create Organization" 
							component={requireAuthentication(OrganizationCreate)}/>
						<Scene key="updateOrg" title="Edit Organization" 
							component={requireAuthentication(OrganizationUpdate)}/>
						<Scene key="orgProfile" title="Organization Profile" 
							component={requireAuthentication(OrgProfile)}/>
						<Scene key="createEvent" title="Create Event" 
							component={requireAuthentication(EventCreate)}/>
					</Scene>
				</Scene>
			</Router>
		);
	}
};

export default RouterComponent;