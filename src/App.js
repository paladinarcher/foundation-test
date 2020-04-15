import React from 'react';
import './App.css';
import DropDownPanelContainer from './components/DropDownPanelContainer';
import ErrorableDateContainer from './components/ErrorableDateContainer';
import ErrorableCheckBoxContainer from './components/ErrorableCheckBoxContainer';
import AlertBoxContainer from './components/AlertBoxContainer';
import AdditionalInfoContainer from './components/AdditinalInfoContainer';
import BreadcrumbsContainer from './components/BreadcrumbsContainer';
import CollapsiblePanelContainer from './components/CollapsiblePanelContainer';
import ErrorableCheckboxGroupContainer from './components/ErrorableCheckboxGroupContainer';
import ErrorableFileInputContainer from './components/ErrorableFileInputContainer';
import ErrorableMonthYearContainer from './components/ErrorableMonthYearContainer';
import ErrorableNumberInputContainer from './components/ErrorableNumberInputContainer';
import ErrorableRadioButtonsContainer from './components/ErrorableRadioButtonsContainer';
import ErrorableTextAreaContainer from './components/ErrorableTextAreaContainer';
import ErrorableSelectContainer from './components/ErrorableSelectContainer';

function App() {
  return (
    <div className="usa-width-one-whole">
      <AlertBoxContainer />

      {/* doesn't work at all.
      <AcceptTermsPrompt
        terms={{ termsContent: '<div><p><strong>Terms and Conditions for Medical Information</strong></p><p>The Department of Veterans Affairs (VA) owns and manages the website VA.gov. VA.gov allows you to use online tools that display parts of your personal health information. This health information is only displayed on VA.gov—the information is stored on VA protected federal computer systems and networks. VA supports the secure storage and transmission of all information on VA.gov.</p><p><strong>Terms and Conditions for Medical Information</strong></p><p>The Department of Veterans Affairs (VA) owns and manages the website VA.gov. VA.gov allows you to use online tools that display parts of your personal health information. This health information is only displayed on VA.gov—the information is stored on VA protected federal computer systems and networks. VA supports the secure storage and transmission of all information on VA.gov.</p><p><strong>Terms and Conditions for Medical Information</strong></p><p>The Department of Veterans Affairs (VA) owns and manages the website VA.gov. VA.gov allows you to use online tools that display parts of your personal health information. This health information is only displayed on VA.gov—the information is stored on VA protected federal computer systems and networks. VA supports the secure storage and transmission of all information on VA.gov.</p></div>', headerContent: 'test header content', title: 'Terms and Conditions', footerContent: 'test footer content', yesContent: 'accept terms and conditions' }}
        onAccept={() => { }}
        onCancel={() => { }}
      />*/}

      <AdditionalInfoContainer />

      <BreadcrumbsContainer />

      <CollapsiblePanelContainer />

      <DropDownPanelContainer />

      <ErrorableDateContainer />

      <ErrorableCheckBoxContainer />

      <ErrorableCheckboxGroupContainer />

      <ErrorableFileInputContainer />

      <ErrorableMonthYearContainer />

      <ErrorableNumberInputContainer />

      <ErrorableRadioButtonsContainer />

      <ErrorableTextAreaContainer />

      <ErrorableSelectContainer />
    </div>
  );
}

export default App;
