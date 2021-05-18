import express from 'express';
import AuthenticationController from '../Controllers/AuthenticationController.js'

const Router = express.Router
const routes = new Router();

// Add routes
routes.post('/signup', AuthenticationController.signUp);
routes.post('/login', AuthenticationController.login);


export default routes;
