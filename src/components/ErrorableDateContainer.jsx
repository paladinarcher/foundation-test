import React, { Component } from 'react';
import ErrorableDate from '@department-of-veterans-affairs/formation-react/ErrorableDate';

class ErrorableDateContainer extends Component {
    state = {
        date: {
            day: {
                value: '14',
                dirty: false,
            },
            month: {
                value: '4',
                dirty: false,
            },
            year: {
                value: '1983',
                dirty: false,
            },
        }
    }

    render() {
        return (
            <div>
                <h1>ErrorableDate</h1>
                <ErrorableDate
                    onValueChange={date => this.setState({ date })}
                    required={true}
                    label='Please tell us a date'
                    name='Errorable Date'
                    date={this.state.date}
                    requiredMessage='Please provide a response'
                    invalidMessage='Please provide a valid date'
                />
            </div>
        );
    }
}

export default ErrorableDateContainer;