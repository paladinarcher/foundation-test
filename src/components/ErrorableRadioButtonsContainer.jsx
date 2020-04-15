import React, { Component } from 'react';
import ErrorableRadioButtons from '@department-of-veterans-affairs/formation-react/ErrorableRadioButtons'

class ErrorableRadioButtonsContainer extends Component {
    state = {
        field: {
            value: 'option 2',
            dirty: false
        }
    }

    render() {
        return (
            <div>
                <h1>ErrorableRadioButtons</h1>
                <div>You picked: { this.state.field.value }</div>
                <ErrorableRadioButtons
                    onValueChange={(value) => this.setState({ field: value })}
                    id='defaultId'
                    name='defaultName'
                    errorMessage='Radio Button errorMessage'
                    label='Errorable Radio Buttons'
                    options={[
                        'option 1',
                        'option 2',
                        {
                            label: 'option 3',
                            value: 'expanding option 3',
                            additional: 'expanded option 3',
                        },
                    ]}
                    value={this.state.field}
                    required={false}
                    toolTipText='this triggers a tooltip'
                />
            </div>
        );
    }
}

export default ErrorableRadioButtonsContainer;