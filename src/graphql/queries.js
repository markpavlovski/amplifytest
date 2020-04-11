/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHaiku = /* GraphQL */ `
  query GetHaiku($id: ID!) {
    getHaiku(id: $id) {
      id
      content
    }
  }
`;
export const listHaikus = /* GraphQL */ `
  query ListHaikus(
    $filter: ModelHaikuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHaikus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
      }
      nextToken
    }
  }
`;
