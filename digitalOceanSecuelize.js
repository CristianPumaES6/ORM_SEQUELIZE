const Sequelize = require('sequelize');

const postgres = require('pg');

//

const sequelize = new Sequelize('cpuma', 'cpuma', 'Peru123.', {
  // gimme postgres, please!
  dialect: 'postgres',
  host: '165.22.203.55',
  dialectOptions: {
    ssl: true
  },
})


// probar la conexion
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
