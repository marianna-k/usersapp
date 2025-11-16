import express from 'express';
import morgan from 'morgan'; // import morgan library
import User from './models/user.model';
import Role from './models/role.model';

const app = express();
app.use(morgan('dev stage'));
//endpoint creation: about
app.get('/about', (req, res) =>{
    res.send("This is the about page");
});

export default app;