import React, { Component } from 'react';
import Settings from '../component/Settings';
import Popup from '../component/Popup'
class Setting extends Component {
    

    render() {
        return (
            <div style={{marginTop:'50px'}}>
                <Settings />
                <Popup />
            </div>
        );
    }
}


export default Setting;