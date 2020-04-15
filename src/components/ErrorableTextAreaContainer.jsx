import React, { Component } from 'react';
import ErrorableTextArea from '@department-of-veterans-affairs/formation-react/ErrorableTextArea'

class ErrorableTextAreaContainer extends Component {
    state = {
        field: {
            dirty: false,
            charMax: 255,
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>ErrorableTextArea</h1>
                <p>The text you entered<br/>
                { this.state.field.value }
                </p>
                <ErrorableTextArea
                    disabled={false}
                    errorMessage='Error message'
                    label='Label'
                    placeholder='Placeholder'
                    name='Name'
                    required={true}
                    field={this.state.field}
                    onValueChange={(field) => this.setState({ field })}
                />
            </div>
        );
    }
}

export default ErrorableTextAreaContainer;