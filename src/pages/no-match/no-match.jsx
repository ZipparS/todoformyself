import React, { Component } from "react";

export class NoMatch extends Component {
    render() {
        const { location } = this.props;

        return (
            <div className="Not-found">
                Page "{location.pathname}" not found
            </div>
        );
    }
}