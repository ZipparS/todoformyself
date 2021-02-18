import React from 'react';

import './progress.css';

export class ProgressBarComponent extends React.Component {
    static defaultProps = {
        counter: 50,
        color: '#3a33d1'
    };

    render() {
        const {counter, color} = this.props;
        const countStyle = {width: `${counter}%`, backgroundColor: color};
        return (
            <div className="Progress">
                <p className="Progress__titel">
                    Progress status: {counter}%
                </p>
                <div className="Progress__line">
                    <div
                        className="Progress__status"
                        style={countStyle}
                    >
                    </div>
                </div>
            </div>
        );
    }
}
