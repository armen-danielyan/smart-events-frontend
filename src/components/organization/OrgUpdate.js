'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { orgUpdate, orgSingleFetch, fieldValueChanged } from 'actions/OrgActions';
import _ from 'lodash';

import Button from 'components/common/Button';
import OrganizationForm from './OrgForm';

class OrganizationUpdate extends Component {

    componentWillMount() {
        const {id, role} = this.props.navigationState.orgData;
        this.props.orgSingleFetch(id);
    };

    saveOrgData = () => {
        const {id} = this.props.navigationState.orgData;
        const { name, description, contactInfoEmail, contactInfoPhone, 
            location, image } = this.props.orgData;
        this.props.orgUpdate({ name, description, contactInfoEmail, contactInfoPhone, 
            location, image, id: id});
    };
    
    render() {
        return (
                <View style={{marginTop: 70, flex: 1, position: 'relative' }}>
                    <OrganizationForm {...this.props.orgData} 
                        onValueChange={this.props.fieldValueChanged.bind(this)}/>
                    <View style={{height: 60, justifyContent: 'center'}}>
                        <Button title={'Save'} 
                            onPress={this.saveOrgData.bind(this)} />
                    </View>
                </View>
            
        );
    }
}

const mapStateToProps = ({org}) => {
    const orgData = org.data;
    return { orgData };
};

export default connect(mapStateToProps, { orgUpdate, orgSingleFetch, 
    fieldValueChanged })(OrganizationUpdate);