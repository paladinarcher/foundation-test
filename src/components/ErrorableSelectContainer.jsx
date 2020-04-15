import React, { Component } from 'react';
import ErrorableSelect from '@department-of-veterans-affairs/formation-react/ErrorableSelect'

class ErrorableSelectContainer extends Component {
    state = {
        field: {
            value: '',
            dirty: true
        }
    }

    render() {
        return (
            <div>
                <h1>ErrorableSelect</h1>
                <p>You selected { this.state.field.value }.</p>
                <ErrorableSelect
                    errorMessage='This is the error message'
                    label='select label'
                    name='Attribute name'
                    options={['first option', 'second option', 'third option']}
                    required={true}
                    value={this.state.field}
                    includeBlankOption={true}
                    onValueChange={value => this.setState({ field: value })}
                    additionalClass='additional-class'
                    emptyDescription='select an item'
                />
            </div>
        );
    }
}

export default ErrorableSelectContainer;