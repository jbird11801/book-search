const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');



const resolvers = {
  Query: {
    
    me : async(parent , {userId}) =>
    
    {

      return User.findOne({_id : userId});

    }

  },
  Mutation: {

    addBook: async (parent , {user , bookInput}) => {

      const book = JSON.parse(bookInput);

      return await User.findOneAndUpdate(

        {username : user} ,

        {

          $addToSet : {savedBooks : book}

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

      return await User.findOneAndUpdate(

        { username: username },

        { $pull : {savedBooks : { _id : bookID}}}, 

        { new: true }
        
        );

    },

  },

};


module.exports = resolvers;