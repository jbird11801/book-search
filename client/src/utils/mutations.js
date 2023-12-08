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

export const SAVE_BOOK = gql`
  mutation addBook($user : String! , $bookInput : String!) {
    addBook(user : $user , bookInput : $bookInput) {

      email
      username
      _id

   savedBooks{   
    authors
    description
    bookId
    image
    link
    title}
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($username : String!, $bookId : ID!) {
    removeBook(username : $username , bookId : $bookId) {
        token
        user {
          _id
          username
        }
      }
    }
`;