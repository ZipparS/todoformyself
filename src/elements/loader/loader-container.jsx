import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoaderComponentView } from './loader';

class LoaderContainer extends Component {
    render() {
        const { isLoader } = this.props;
        return (
            isLoader ? <LoaderComponentView /> : null
        );
    }
}

export const Loader = connect((state) => ({isLoader: state.services.loader}))(LoaderContainer);
