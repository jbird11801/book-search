import { gql } from '@apollo/client';

export const QUERY_User = gql`
  query user($username: String!) {
    user (username : $username) {
      
      username

      email

      savedBooks {
        
        authors

        description

        _id

        image

        link

        title

      }

    }

  }
`;

export const QUERY_MATCHUPS = gql`
 

`;