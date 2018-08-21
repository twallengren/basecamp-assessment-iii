import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="company">
                    INTERWEBZ
                </div>
                <button id="button">
                    CLICK ME, I DO NOTHING
                </button>
            </div>
        );
    }
}

export default Header;
