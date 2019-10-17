/**
 * @note : (1)
 * @description this is the structure that frontend expects backend to send back
 * @example :
  const dummyPet = {
    owner: {
      id: 1,
      firstName: 'Ronald',
    },
    pets: [
      {
        id: 1,
        name: 'Fido',
        type: 'dog',
        gender: 'm',
        spayed: true,
        birth_year: 2006,
        vet: 'Dr. Lewis',
        profilePic: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        visits: [ // array of 5 most recent visits (if total < 5, fill in the rest as null)
        {
          id: 1,
          date: '12/10/2018',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 2,
          date: '6/8/2018',
          notes: 'removing plastic toy from his stomach',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 3,
          date: '12/10/2017',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 4,
          date: '8/6/2017',
          notes: 'knee surgery',
          file: '???',
          vet: 'Dr. Lewis',
        },
        {
          id: 5,
          date: '12/10/2016',
          notes: 'annual checkup',
          file: '???',
          vet: 'Dr. Lewis',
        },
      ],
      surgeries: [ // array of 5 most recent surgeries (if total < 5, fill in the rest as null)
        {
          id: 1,
          name: 'knee surgery',
          date: '8/6/2017',
          vet: 'Dr. Lewis',
        },
        {
          id: 2,
          name: 'neutering',
          date: '11/19/2007',
          vet: 'Dr. Schwartz',
        },
        null,
        null,
        null,
      ],
      vaccines: [ // array of 5 most recent vaccines (if total < 5, fill in the rest as null)
        {
          id: 1,
          name: 'influenza',
          date: '12/10/2018',
        },
        {
          id: 2,
          name: 'anti-worms',
          date: '7/31/2014',
        },
      ],
    },
  ],
  };
*/

/**
 * @note : (2)
 * @description add image url to store pet images
 */

/**
 * @note : (3)
 * @description need to go back and fix the query for pets to query visits
 */