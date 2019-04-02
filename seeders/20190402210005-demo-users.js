'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Travel', [{
        username: 'John Doe',
        password: 'password1',
        name: 'John Cena',
        birthday: '1980-01-01',
        location: 'France',
        language: 'english',
        travelguide: 'false',
        dates: '10-2019',
        special_requests: 'None'  
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
