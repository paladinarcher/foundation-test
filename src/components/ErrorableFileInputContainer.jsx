import React, { Component } from 'react';
import ErrorableFileInput from '@department-of-veterans-affairs/formation-react/ErrorableFileInput';

class ErrorableFileInputContainer extends Component {
    state = {
        fileUploadedText: 'Upload your file, please!'
    }

    render() {
        return (
            <div>
                <h1>ErrorableFileInput</h1>
                <div>{ this.state.fileUploadedText }</div>
                <ErrorableFileInput
                    name='Name'
                    multiple={true}
                    buttonText='Upload some files'
                    accept='String'
                    errorMessage='Error message'
                    onChange={(e) => { this.fileUploaded(e); }}
                />                
            </div>
         );
    }

    fileUploaded(e) {
        this.setState({fileUploadedText : 'File ' + e.item(0).name + ' Uploaded!'});
    }
}

export default ErrorableFileInputContainer;