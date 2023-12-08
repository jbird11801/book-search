import { gql } from '@apollo/client';

export const QUERY_User = gql`
    query me($userId: ID!){
    me (userId : $userId) {

      username

      savedBooks {
        
        authors

        description

        bookId

        image

        link

        title

      }

    }

  }
`;
 