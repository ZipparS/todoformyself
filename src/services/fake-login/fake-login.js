export const fakeLogin = {
    login(callback) {
        setTimeout(() => { callback() }, 1000); // fake async
    },
    logout(callback) {
        window.sessionStorage.setItem('user', '');
        callback();
    },
    isAuth() {
        return Boolean(window.sessionStorage.getItem('user'));
    }
};
