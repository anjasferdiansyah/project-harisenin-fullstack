const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOSTNAME,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
  },
  test: {
    username: 'postgres.xgxjjwsaukbeybbdavmd',
    password: '1LuhLamXrGeW9eDN',
    database: 'postgres',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: 5432,
    dialect: 'postgres',
  },
  // production: {
  //   username: 'root',
  //   password: null,
  //   database: 'database_production',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  // },
};
