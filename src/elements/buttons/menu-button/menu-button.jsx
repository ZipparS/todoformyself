import React, { Component } from "react";
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class MenuButtonComponent extends Component {
    render() {
        return (
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon/>
            </IconButton>
        );
    }
}

export const MenuButton = connect()(MenuButtonComponent);