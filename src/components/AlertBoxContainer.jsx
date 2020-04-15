import React, { Component } from 'react';
import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';


class AlertBoxContainer extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>AlertBox</h1>
                <AlertBox headline='Informational Alert' content='This is an alert!' status='info' isVisible />
                <AlertBox headline='Warning Alert' content='This is an alert!' status='warning' isVisible />
                <AlertBox headline='Error Alert' content='This is an alert!' status='error' isVisible />
            </div>
        );
    }
}

export default AlertBoxContainer;