import React from 'react';
import './App.css';
import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';
import AcceptTermsPrompt from '@department-of-veterans-affairs/formation-react/AcceptTermsPrompt';
import AdditionalInfo from '@department-of-veterans-affairs/formation-react/AdditionalInfo';
import Breadcrumbs from '@department-of-veterans-affairs/formation-react/Breadcrumbs';
import CollapsiblePanel from '@department-of-veterans-affairs/formation-react/CollapsiblePanel'
import DropDownPanel from '@department-of-veterans-affairs/formation-react/DropDownPanel'
import DropDownPanelContainer from './components/DropDownPanelContainer';
import ErrorableDateContainer from './components/ErrorableDateContainer';

function App() {
  return (
    <div className="usa-width-one-whole">
      <AlertBox headline='Informational Alert' content='This is an alert!' status='info' isVisible />
      <AlertBox headline='Warning Alert' content='This is an alert!' status='warning' isVisible />
      <AlertBox headline='Error Alert' content='This is an alert!' status='error' isVisible />

      {/* doesn't work at all.
      <AcceptTermsPrompt
        terms={{ termsContent: '<div><p><strong>Terms and Conditions for Medical Information</strong></p><p>The Department of Veterans Affairs (VA) owns and manages the website VA.gov. VA.gov allows you to use online tools that display parts of your personal health information. This health information is only displayed on VA.gov—the information is stored on VA protected federal computer systems and networks. VA supports the secure storage and transmission of all information on VA.gov.</p><p><strong>Terms and Conditions for Medical Information</strong></p><p>The Department of Veterans Affairs (VA) owns and manages the website VA.gov. VA.gov allows you to use online tools that display parts of your personal health information. This health information is only displayed on VA.gov—the information is stored on VA protected federal computer systems and networks. VA supports the secure storage and transmission of all information on VA.gov.</p><p><strong>Terms and Conditions for Medical Information</strong></p><p>The Department of Veterans Affairs (VA) owns and manages the website VA.gov. VA.gov allows you to use online tools that display parts of your personal health information. This health information is only displayed on VA.gov—the information is stored on VA protected federal computer systems and networks. VA supports the secure storage and transmission of all information on VA.gov.</p></div>', headerContent: 'test header content', title: 'Terms and Conditions', footerContent: 'test footer content', yesContent: 'accept terms and conditions' }}
        onAccept={() => { }}
        onCancel={() => { }}
      />*/}

      <AdditionalInfo triggerText="Additional Information">
        <ul>
          <li>info A</li>
          <li>info B</li>
          <li>info C</li>
          <li>info D</li>
        </ul>
      </AdditionalInfo>

      <Breadcrumbs>
        {[
          <a href="#" key="1">Home</a>,
          <a href="#" key="2">Level One</a>,
          <a href="#" key="3">Level Two</a>
        ]}
      </Breadcrumbs>

      <CollapsiblePanel
        panelName="Collapsible Panel">
        <div>This panel defaults to closed.</div>
      </CollapsiblePanel>
      {/* error when attemp to open panel */}
      <CollapsiblePanel
        panelName="Collapsible Panel" startOpen>
        <div>This panel defaults to open.</div>
      </CollapsiblePanel>

      <DropDownPanelContainer />

      <ErrorableDateContainer />
    </div>
  );
}

export default App;
