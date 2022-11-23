import { express } from "express";
import router from './router/router';


const app = express(); {
    router.user(" /accueil", accueil);
    router.user(" /home", home);
    router.user(" /inscription", inscription);
    router.user(" /login", login);
    router.user(" /user", user);

}

export default app;

