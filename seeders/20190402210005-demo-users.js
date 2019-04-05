'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Travel', [
          {
            username: 'traveler1',
            password: 'password1',
            email: "example@example.com",
            name: 'John Cena',
            birthday: '1980-01-01',
            location: 'France',
            travelguide: "no",
            dates: "March",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler2',
            password: 'password2',
            email: "example@example.com",
            name: 'John Doe',
            birthday: '1973-07-02',
            location: 'France',
            travelguide: "no",
            dates: "March",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler3',
            password: 'password3',
            email: "example@example.com",
            name: 'Freddie Mercury',
            birthday: '1993-11-12',
            location: 'France',
            travelguide: "no",
            dates: "April",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler4',
            password: 'password4',
            email: "example@example.com",
            name: 'Steve Jobs',
            birthday: '1961-01-12',
            location: 'Japan',
            travelguide: "no",
            dates: "May",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler5',
            password: 'password5',
            email: "example@example.com",
            name: 'Bart Simpson',
            birthday: '1955-11-01',
            location: 'Mexico',
            travelguide: "no",
            dates: "June",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler14',
            password: 'password5',
            email: "example@example.com",
            name: 'Jane Harper',
            birthday: '1955-11-01',
            location: 'Italy',
            travelguide: "no",
            dates: "June",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler20',
            password: 'password5',
            email: "example@example.com",
            name: 'Julia Johnny',
            birthday: '1955-11-01',
            location: 'Italy',
            travelguide: "no",
            dates: "June",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler5',
            password: 'password5',
            email: "example@example.com",
            name: 'Arnold S',
            birthday: '1955-11-01',
            location: 'France',
            travelguide: "no",
            dates: "June",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler5',
            password: 'password5',
            email: "example@example.com",
            name: 'Josh Harias',
            birthday: '1955-11-01',
            location: 'Italy',
            travelguide: "no",
            dates: "June",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          },
          {
            username: 'traveler6',
            password: 'password6',
            email: "example@example.com",
            name: 'Tina Belcher',
            birthday: '1940-11-01',
            location: 'Mexico',
            travelguide: "no",
            dates: "July",
            special_requests: 'None',
            createdAt: "2019-01-01", 
            updatedAt: "2019-01-01"
          }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
