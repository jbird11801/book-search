import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(username : string! , authors : []! , description : String! , _id : string! , image : string , link : String , title : String!) {
    addBook(thoughtText: $thoughtText) {
      username
      author
      description
      _id
      image
      link
      title
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(username : string! , authors : []! , description : String! , _id : string! , image : string , link : String , title : String!) {
    removeBook(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
        }
      }
    }
`;