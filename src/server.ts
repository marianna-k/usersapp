//establish db connection once server is up
//once the connection is established, call app.ts that has endpoints

import {connectDB} from './utils/db';
import app from './app';  //app from app.ts


const port = process.env.PORT || 3000;

//async db call and if everything's ok then => app.listen
const start = async() =>{
    await connectDB(); //db connection
    app.listen(port, ()=>{
    console.log("Server is up on: ", port);
   })
}

start();
