import { testDB } from '../../test-db/test-db';

export const authRequest = (authData) => {
    const { userData, userAction, loginAction } = authData;

    const testLogin = testDB.user.login.toLowerCase() === userData.login.toLowerCase();
    const testPassword = testDB.user.password === userData.password;
    const isUserDataValid = testLogin && testPassword;

    return new Promise((res, rej) => {
        if (isUserDataValid) {
            setTimeout(() => {
                window.sessionStorage.setItem('user', JSON.stringify(testDB.user.login));
                userAction(testDB.user.login);
                loginAction(true);

                res({auth: true});
            }, 1000);
        } else {
            setTimeout(() => {
                rej({auth: false, errors: ['invalid data']} );
            }, 1000);
        }
    });
};
