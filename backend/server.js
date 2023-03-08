import mysql from 'mysql';


export const server = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'leleco2012',
  database: 'testepricemet'
});

