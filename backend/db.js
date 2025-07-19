
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: 'Ofg@112233',
  port: 5432,
});

module.exports = pool;

// pool.connect((err, client, release) => {
//   if (err) {
//     console.error('Error acquiring client', err.stack);
//   } else {
//     console.log('Database connected successfully!');
//     release();
//   }
// });

