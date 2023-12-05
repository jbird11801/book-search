const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
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
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
      
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