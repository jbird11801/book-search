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

    addBook: async (parent , {userName , authors , description , _id , image , link , title}) => {

      return User.findOneAndUpdate(

        {username : userName} ,

        {

          $addToSet : {savedBooks : {authors , description , _id , image , link , title} }

        },

        {

          new: true,
          runValidators: true

        }

      )

    },

    addUser : async (parent , {userName , email , password}) => {

      return User.create({userName , email , password});

    },

    removeBook: async (parent, { userName , bookID }) => {

      return User.findOneAndUpdate(

        { userName: userName },

        { $pull : {savedBooks : { _id : bookID}}}, 

        { new: true }
        
        );

    },

  },

};

module.exports = resolvers;