import React, { Component } from 'react';
import Breadcrumbs from '@department-of-veterans-affairs/formation-react/Breadcrumbs';

class BreadcrumbsContainer extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Breadcrumbs</h1>
                <Breadcrumbs>
                    {[
                        <a href="#" key="1">Home</a>,
                        <a href="#" key="2">Level One</a>,
                        <a href="#" key="3">Level Two</a>
                    ]}
                </Breadcrumbs>
            </div>
        );
    }
}

export default BreadcrumbsContainer;