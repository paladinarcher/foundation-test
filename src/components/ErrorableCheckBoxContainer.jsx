import React, { Component } from 'react';
import ErrorableCheckbox from '@department-of-veterans-affairs/formation-react/ErrorableCheckbox'

class ErrorableCheckBoxContainer extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Errorable Checkbox</h1>
                <ErrorableCheckbox
                    label='Errorable Checkbox'
                    onValueChange={(value) => value}
                    id='default'
                    errorMessage=''
                    required={true}
                    title='ErrorableCheckbox'
                />
                <ErrorableCheckbox
                    label="I want to type in my school's name and address."
                    labelAboveCheckbox="If you don't find your school in the search results, then check the box to enter in your school information manually."
                    onValueChange={(value) => value}
                    id='default'
                    errorMessage='Error message'
                    required={true}
                    title='ErrorableCheckbox'
                />
                <h4 id="checkboxTitle">External heading [label-substitute]</h4>
                <ErrorableCheckbox
                    ariaLabelledBy="checkboxTitle"
                    labelAboveCheckbox="If a separate heading (like above) “labels” the checkbox, we do not want screen-readers to read both the heading and the checkbox’s own label.  In this case, an aria-labelledby attribute substitutes for the checkbox’s own label text, and references the external heading above."
                    onValueChange={(value) => value}
                    id='default'
                    errorMessage=''
                    required={true}
                    title='ErrorableCheckbox'
                />
            </div>
        );
    }
}

export default ErrorableCheckBoxContainer;