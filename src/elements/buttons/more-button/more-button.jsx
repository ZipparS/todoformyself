import React, { Component, Fragment } from 'react';

import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import { withStyles } from '@material-ui/core/styles';

import { ButtonIcon as IconButton } from '../../buttons';

const anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const styles = () => ({
    menuItem: {
        padding: '10px 8px'
    }
});

export class MoreButtonComponent extends Component {
    state = {
        anchorEl: null
    };

    handleMenu = event => this.setState({ anchorEl: event.currentTarget });

    handleClose = () => this.setState({ anchorEl: null });

    render() {
        const { classes, menuItems } = this.props;
        const { anchorEl } = this.state;

        return (
            <Fragment>
                <IconButton
                    onClick={this.handleMenu}
                    titel={'more_vert'}
                />
                <Menu
                    id="menu-button-more"
                    anchorEl={anchorEl}
                    anchorOrigin={anchorOrigin}
                    transformOrigin={transformOrigin}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem
                        className={classes.menuItem}
                        onClick={this.handleClose}
                    >
                        {menuItems.map((item, i) =>
                            <IconButton
                                onClick={item.onClick}
                                titel={item.titel}
                                disabled={item.disabled}
                                key={i}
                            />
                        )}
                    </MenuItem>
                </Menu>
            </Fragment>
        );
    }
}

export const MoreButton = withStyles(styles)(MoreButtonComponent);
