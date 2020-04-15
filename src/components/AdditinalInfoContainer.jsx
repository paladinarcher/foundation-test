import React, { Component } from 'react';
import AdditionalInfo from '@department-of-veterans-affairs/formation-react/AdditionalInfo';

class AdditionalInfoContainer extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>AddtionalInfo</h1>
                <AdditionalInfo triggerText="Additional Information">
                    <ul>
                        <li>info A</li>
                        <li>info B</li>
                        <li>info C</li>
                        <li>info D</li>
                    </ul>
                </AdditionalInfo>
            </div>
        );
    }
}

export default AdditionalInfoContainer;