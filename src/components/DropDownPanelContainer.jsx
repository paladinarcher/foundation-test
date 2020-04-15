import React, { Component } from 'react';
import DropDownPanel from "@department-of-veterans-affairs/formation-react/DropDownPanel";

class DropDownPanelContainer extends Component {
    state = { open: true }

    render() {
        return (
            <div style={{ backgroundColor: '#112e51' }}>
                <DropDownPanel
                    buttonText='Helpdesk'
                    cssClass='va-dropdown'
                    isOpen={this.state.open}
                    contents='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'
                    clickHandler={() => this.changeState()}>
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'
                </DropDownPanel>
            </div>
        );
    }

    changeState() {
        this.setState({open : !this.state.open});
        console.log(this.state.open);
    }
}

export default DropDownPanelContainer;
