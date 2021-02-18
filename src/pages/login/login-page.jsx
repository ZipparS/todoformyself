import React from 'react';

import { LoginForm } from '../../modules';
import './login-page.css';

export class LoginPage extends React.Component {
    // handleRefs = (ref, event) => {
        // console.log('ref', ref);
        // console.log('event', event.keyCode);
        // if (event.keyCode === '') {
        //     ref.focus();
        // }
    // };

    render() {
        return (
            <div className="Login">
                <aside className="Login__aside">
                    <div className="Login__aside-content">
                        <p className="Login__aside-heading">
                            Enter your login and password
                        </p>
                        <LoginForm
                            fullWidth
                            // handleRefs={this.handleRefs}
                        />
                    </div>
                </aside>
                <main className="Login__content">
                    <h2>login page</h2>
                </main>
            </div>
        );
    }
}
