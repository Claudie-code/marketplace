import * as Realm from "realm-web";

const app = new Realm.App({ id: process.env.REACT_APP_REALM_KEY });

export { app };
