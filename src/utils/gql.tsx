import { gql } from 'apollo-boost';

export const ADD_RULE = gql`
  mutation createRule($srcAddr: String!, $dstAddr: String!) {
    createRule(srcAddr: $srcAddr, dstAddr: $dstAddr)
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
