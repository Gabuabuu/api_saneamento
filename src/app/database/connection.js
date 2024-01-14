import mysql from 'mysql';

import 'dotenv/config'

const conection = mysql.createConnection({
    host: process.env.HOST, 
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,

    
})

export default conection