'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { orgCreate, fieldValueChanged, cleanForm } from 'actions/OrgActions';

import Button from 'components/common/Button';
import OrganizationForm from './OrgForm';

class OrganizationCreate extends Component {

    componentWillMount() {
        this.props.cleanForm();
    };

	saveOrgData = () => {
        const { name, description, contactInfoEmail, contactInfoPhone, 
            location, image } = this.props;
        this.props.orgCreate({ name, description, contactInfoEmail, contactInfoPhone, 
            location, image });
    };
	
	render() {
	    return (
                <View style={{marginTop: 70, flex: 1, position: 'relative' }}>
                    <OrganizationForm {...this.props} 
                        onValueChange={this.props.fieldValueChanged.bind(this)}/>
                    <View style={{height: 60, justifyContent: 'center'}}>
                        <Button title={'Create Organization'} 
                            onPress={this.saveOrgData.bind(this)} />
                    </View>
                </View>
	    	
	    );
	}
}

const mapStateToProps = ({org}) => {
    const { name, description, contactInfoEmail, contactInfoPhone, 
            location, image } = org.data;

    return { name, description, contactInfoEmail, contactInfoPhone, 
            location, image };
};

export default connect(mapStateToProps, { 
    orgCreate, fieldValueChanged, cleanForm })(OrganizationCreate);