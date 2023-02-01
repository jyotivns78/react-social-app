import mysql from 'mysql';




export const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "jyoti78",
    database: "social"
})