import express from 'express';
import morgan from 'morgan'; // import morgan library

//no function called userRoutes or roleRoutes, just export all that's included in either user.routes or role.routes to the respective elements
//export router from both of the files
import userRoutes from './routes/user.routes';
import roleRoutes from './routes/role.routes';

const app = express();
app.use(morgan('dev'));

//endpoint: /api
app.use('/api/users', userRoutes); //for this endpoint: /api/users  check any calls in userRoutes, import from user.routes
app.use('/api/roles', roleRoutes); //for this endpoint: /api/roles  check any calls in roleRoutes, import from role.routes

export default app;