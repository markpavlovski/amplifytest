/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHaiku = /* GraphQL */ `
  mutation CreateHaiku(
    $input: CreateHaikuInput!
    $condition: ModelHaikuConditionInput
  ) {
    createHaiku(input: $input, condition: $condition) {
      id
      content
    }
  }
`;
export const updateHaiku = /* GraphQL */ `
  mutation UpdateHaiku(
    $input: UpdateHaikuInput!
    $condition: ModelHaikuConditionInput
  ) {
    updateHaiku(input: $input, condition: $condition) {
      id
      content
    }
  }
`;
export const deleteHaiku = /* GraphQL */ `
  mutation DeleteHaiku(
    $input: DeleteHaikuInput!
    $condition: ModelHaikuConditionInput
  ) {
    deleteHaiku(input: $input, condition: $condition) {
      id
      content
    }
  }
`;
