const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
    user : async(parent , {username}) =>
    {
      
      const params = username ? { username } : {};

      return User.find(params);

    }

  },
  Mutation: {

    addBook: async (parent , {username ) => {

      return User.findOneAndUpdate(

        {username : username} ,

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

    addUser : async (parent , {username , email , password}) => {

      console.log("username: " + username + "b4")

      const user = await User.create({username , email , password});

      console.log("username: " + user.username)
      const token = signToken(user);

      return { token, user };

    },

    removeBook: async (parent, { username , bookID }) => {

      return User.findOneAndUpdate(

        { username: username },

        { $pull : {savedBooks : { _id : bookID}}}, 

        { new: true }
        
        );

    },

  },

};

module.exports = resolvers;