import * as Realm from "realm-web";
import { addUser, getUser } from "../../service";
import { app } from '../../service/mongoDB-sdk';
import { handleAuthenticationError, handleLogin, handleLogout } from '../../state/actions/authentication';

const useAuthentication = (dispatch) => {
    const handleUserRegistration = (newUser) => { 
        const pattern = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
        );
        const userProfile = {
            ...newUser,
            password: undefined,
            confirm_password: undefined,
        };
        return new Promise((resolve, reject) => {
            if (!Object.values(userProfile).every(element => element !== "")) {
                const errorRequired = "Please complete all fields";
                reject(errorRequired);
                return dispatch(handleAuthenticationError({error : errorRequired}));
            };
            if (newUser.password !== newUser.confirm_password) {
                const errorIdentical = "passwords are not the same";
                reject(errorIdentical);
                return dispatch(handleAuthenticationError({error : errorIdentical}));
            };
            if (newUser.password.length < 8 || !pattern.test(newUser.password)) {
                const errorValidator = 'Password must contain at least 8 characters and must contain at least one capital letter and one numeric character.';
                reject(errorValidator);
                return dispatch(handleAuthenticationError({error : errorValidator}));
            }
            app.emailPasswordAuth
            .registerUser(newUser.email, newUser.password)
            .then(() => {
                addUser(userProfile);
                resolve(`email confirmation sent to ${newUser.email}`);
            })
            .catch(err => { dispatch(handleAuthenticationError(err)); });
        });
    };

    const handleEmailConfirmation = (token, tokenId) => { 
        return new Promise((resolve, reject) => {
            if(!token && !tokenId) {
                return reject("Missing tokens.");
            }
            app.emailPasswordAuth
            .confirmUser({ token, tokenId })
            .then(() => {
                resolve("Email confirmed, please login.");
            })
            .catch(err => reject("Userpass token is expired or invalid."));
        });

    };

    async function handleUserLogout() {
        return new Promise((resolve, reject) => {
            app.currentUser?.logOut()
            .then(() => {
                localStorage.removeItem("user");
                handleLogout();
                resolve("user successfully log out");
            })
            .catch(err => { console.log(err); });
        })
    };

    async function handleUserLogin(email, password) {
        return new Promise((resolve, reject) => {
            app.logIn(Realm.Credentials.emailPassword(email, password))
            .then(async () => {
                const currentUser = await app.currentUser;
                getUser(currentUser).then(userProfile => {
                    dispatch(handleLogin(userProfile));
                    resolve(userProfile);
                });
            })
            .catch(error => { dispatch(handleAuthenticationError(error)) });
        })
    };

    async function handleUserUpdate(user) {
        return new Promise((resolve, reject) => {
            
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
        handleAuthentication,
        handleEmailConfirmation
    };
};

export default useAuthentication;
