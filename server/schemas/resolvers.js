const { User } = require('../models');

const resolvers = {
  Query: {
    books: async () => {

      return User.savedBooks.find({})
    
    },

    user : async(parent , {userName}) =>
    {
      
      const params = userName ? { userName } : {};

      return User.find(params);

    }

  },
  Mutation: {

  },
};

module.exports = resolvers;
