const typeDefs = `

  type user {

    username: String!

    email: String!

    password: String!

    savedBooks: [book]
  }

  type auth {

    token : string

    user : user
    
  }

  type book {

    authors : []!

    description : String!

    _id : string!

    image : string

    link : String

    title : String!

  }


  type Query {

    books : [book]
    
    user (username : String) : user

  }

  type Mutation {

    addBook(username : string! , authors : []! , description : String! , _id : string! , image : string , link : String , title : String!) : user

    removeBook(username : string! , _id : string!) : user

    addUser(username : String! , email : String! , password : String!) : user

    login(email: String!, password: String!): Auth

  }

`;

module.exports = typeDefs;

