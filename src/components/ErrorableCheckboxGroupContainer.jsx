import React, { Component } from 'react';
import ErrorableCheckboxGroup from '@department-of-veterans-affairs/formation-react/ErrorableCheckboxGroup';

class ErrorableCheckboxGroupContainer extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>ErrorableCheckboxGroup</h1>
                <ErrorableCheckboxGroup
                    label='Errorable Checkbox Group'
                    onValueChange={(value) => value}
                    id='default'
                    errorMessage='This is an error message'
                    required={true}
                    options={[
                        {
                            label: 'Checkbox label',
                            value: 'value',
                            content: 'a string',
                            additional: 'another thing',
                        },
                        {
                            label: 'Checkbox label',
                            value: 'value',
                            content: 'some more content',
                            additional: 'and another thing',
                        }
                    ]}
                    values={{ key: 'value' }}
                />
            </div>
        );
    }
}

export default ErrorableCheckboxGroupContainer;