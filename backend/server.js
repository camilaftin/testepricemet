import mysql from 'mysql';


export const server = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testepricemet'
});

