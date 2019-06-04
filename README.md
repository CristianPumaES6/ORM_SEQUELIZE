Nose que bd usaran por eso estoy usando un ORM para no complicarme luego.

Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server

LEer documentacion
npm install --save sequelize
npm install --save sqlite3


//  setting up SQLite <==> CONFIGURACION simple
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});


connection pool (production)
If you're connecting to the database from a single process, you should create only one Sequelize instance. Sequelize will set up a connection pool on initialization.

const sequelize = new Sequelize(/* ... */, {
  // ...
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


Testing the connection
You can use the .authenticate() function to test if the connection is OK:

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });