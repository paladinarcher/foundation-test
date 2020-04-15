import React, { Component } from 'react';
import ErrorableMonthYear from '@department-of-veterans-affairs/formation-react/ErrorableMonthYear'

class ErrorableMonthYearContainer extends Component {
    state = {
        date: {
            month: {
                value: '8',
                dirty: false,
            },
            year: {
                value: '1983',
                dirty: false,
            }
        }
    }

    render() {
        return (
            <div>
                <h1>ErrorableMonthYear</h1>
                <div className="site-c-reactcomp__rendered">
                    <ErrorableMonthYear
                        required
                        date={this.state.date}
                        label="Field label"
                        name='ErrorableMonthYear'
                        onValueChange={(date) => this.setState({ date })}
                    />
                </div>
            </div>
        );
    }
}

export default ErrorableMonthYearContainer;