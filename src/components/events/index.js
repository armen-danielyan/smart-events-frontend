import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import EventList from './EventList';

import Container from 'components/common/Container';
import Button from 'components/common/Button';
import TabBar from 'components/common/TabBar';
import styles from './styles';

class EventFeed extends Component {

    render() {
        const {mainContainer} = styles;
        const items = [
            { title: 'Attending', keyId: 0},
            { title: 'Upcoming', keyId: 1},
            { title: 'Popular', keyId: 2}
        ];

        const activeItem = this.props.navigationState.activeItem;

        return(
            <Container>
                <View style={mainContainer}>
        	     	<TabBar items={items} activeItem={activeItem || 1} />
                    <EventList activeItem={activeItem} />
                </View>
            </Container>
        )
    };
};

export default EventFeed;