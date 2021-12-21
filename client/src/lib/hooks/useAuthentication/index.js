import * as Realm from "realm-web";
import { addUser, getUser } from "../../service";
import { app } from '../../service/mongoDB-sdk';
import { handleAuthenticationError, handleLogin, handleLogout } from '../../state/actions/authentication';

const useAuthentication = (dispatch) => {
    const handleUserRegistration = (newUser) => { 
        if (newUser.password !== newUser.confirm_password) {
            return dispatch(handleAuthenticationError({error : "passwords are not the same"}));
        };
        const userProfile = {
            ...newUser,
            password: undefined,
            confirm_password: undefined,
        };
        return new Promise((resolve, reject) => {
            app.emailPasswordAuth
            .registerUser(newUser.email, newUser.password)
            .then(() => {
                const credentials = Realm.Credentials.emailPassword(newUser.email, newUser.password);
                app.logIn(credentials).then(user => {
                    addUser(userProfile);
                    resolve(user);
                    dispatch(handleLogin(userProfile));
                });
            })
            .catch(err => { dispatch(handleAuthenticationError(err)); });
        });
    };

    async function handleUserLogout() {
        app.currentUser?.logOut()
        .then(() => {
            console.log("user successfully log out");
        })
        .catch(err => { console.log(err); });
    };

    async function handleUserLogin(email, password) {
        return new Promise((resolve, reject) => {
            app.logIn(Realm.Credentials.emailPassword(email, password))
            .then(async () => {
                const currentUser = await app.currentUser;
                getUser(currentUser).then(userProfile => {
                    resolve(userProfile);
                    dispatch(handleLogin(userProfile));
                });
            })
            .catch(error => { dispatch(handleAuthenticationError(error)) });
        })
    };

    async function handleAuthentication() {
        const currentUser = await app.currentUser;
        !!currentUser && getUser(currentUser)
        .then(userProfile => {
            dispatch(handleLogin(userProfile));
        })
        .catch(error => { dispatch(handleAuthenticationError(error)) });
    };

    return {
        handleUserRegistration,
        handleUserLogout,
        handleUserLogin,
        handleAuthentication
    };
};

export default useAuthentication;
