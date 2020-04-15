import React, { Component } from 'react';
import CollapsiblePanel from '@department-of-veterans-affairs/formation-react/CollapsiblePanel';

class CollapsiblePanelContainer extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>CollapsiblePanel</h1>
                <CollapsiblePanel
                    panelName="Collapsible Panel">
                    <div>This panel defaults to closed.</div>
                </CollapsiblePanel>
                {/* error when attemp to open panel */}
                <CollapsiblePanel
                    panelName="Collapsible Panel" startOpen>
                    <div>This panel defaults to open.</div>
                </CollapsiblePanel>
            </div>
        );
    }
}

export default CollapsiblePanelContainer;
