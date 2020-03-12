import { gql } from 'apollo-boost';

export const ADD_RULE = gql`
  mutation createRule($srcAddr: String!, $dstAddr: String!) {
    createRule(srcAddr: $srcAddr, dstAddr: $dstAddr)
  }
`;

export const DELETE_RULE = gql`
  mutation deleteRule($id: Int!) {
    deleteRule(id: $id)
  }
`;

export const GET_RULES = gql`
  {
    Rules {
      id
      srcAddr
      dstAddr
    }
  }
`;
