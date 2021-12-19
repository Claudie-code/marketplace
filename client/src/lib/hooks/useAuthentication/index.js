import * as Realm from "realm-web";
import { app } from '../../service/mongoDB-sdk';
import { handleAuthenticationError, handleLogin, handleLogout } from '../../state/actions/authentication';

const useAuthentication = (dispatch) => {
    const handleUserRegistration = (newUser) => { 
        return new Promise((resolve, reject) => {
            app.emailPasswordAuth
            .registerUser(newUser.email, newUser.password)
            .then(() => {
                const credentials = Realm.Credentials.emailPassword(newUser.email, newUser.password);
                app.logIn(credentials).then(user => {
                    resolve(user);
                    dispatch(handleLogin(newUser));
                });
            })
            .catch(err => { dispatch(handleAuthenticationError(err)); });
        });
    };

    async function handleUserLogout() {
        console.dir(app.currentUser);
        app.currentUser?.logOut()
        .then(() => {
            console.log("user successfully log out");
        })
        .catch(err => { console.log(err); });
    };

    async function handleUserLogin(dispatch, email, password) {
        return new Promise((resolve, reject) => {
            app.logIn(Realm.credentials.emailPassword(email, password))
            .then(async () => {
                const currentUser = await app.currentUser;
            })
            .catch(error => { dispatch(handleAuthenticationError(error)) });
        })
    };

    async function handleAuthentication() {
        const currentUser = await app.currentUser;
    };

    return {
        handleUserRegistration,
        handleUserLogout,
        handleUserLogin,
        handleAuthentication
    };
};

export default useAuthentication;
