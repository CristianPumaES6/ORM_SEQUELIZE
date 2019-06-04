const Sequelize = require('sequelize');

// cofiguracion basica
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// probar la conexion
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// crear un modelo e table
const Model = Sequelize.Model;

class User extends Model { }
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
    sequelize,
    modelName: 'user'
    // options
  });

/*
// Esto solo se debe de ejecutar una vez '----------
// Note: using `force: true` will drop the table if it already exists
User.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
*/


//esto muestra todo
User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});


// Synchronizing the model with the database
// If you want Sequelize to automatically create the table (or modify it as needed) according to your model definition, you can use the sync method, as follows:


// Create a new user
User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Delete everyone named "Jane"
User.destroy({
  where: {
    firstName: "Jane"
  }
}).then(() => {
  console.log("Done");
});

// Change everyone without a last name to "Doe"
User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
}).then(() => {
  console.log("Done");
});