import React, { Component } from 'react';
import ErrorableNumberInput from '@department-of-veterans-affairs/formation-react/ErrorableNumberInput'

class ErrorableNumberInputContainer extends Component {
    state = {
        field: {
            value: 25,
            dirty: false
        }
    }

    render() {
        return (
            <div>
                <h1>ErrorableNumberInput</h1>
                <div>The number you entered is: { this.state.field.value }.</div>
                <ErrorableNumberInput
                    onValueChange={(field) => this.setState({ field })}
                    errorMessage='Error message'
                    label='Please pick a number'
                    placeholder='Numbers are between 1 and 10'
                    name='Name'
                    min={1}
                    max={10}
                    field={this.state.field}
                />
            </div>
        );
    }
}

export default ErrorableNumberInputContainer;