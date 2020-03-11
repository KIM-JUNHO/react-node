import * as React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_RULES = gql`
  {
    Rules {
      id
      srcAddr
      dstAddr
    }
  }
`;

export default function History() {
  const { loading, error, data } = useQuery(GET_RULES);
  if (loading) {
    return 'loading...';
  }
  if (data && data.Rules) {
    return (
      <table>
        <thead>
          <tr>
          <th>#</th>
          <th>Src IP</th>
          <th>Dst IP</th>
          </tr>
        </thead>
        <tbody>
          {data.Rules.map(rule => 
          <tr>
            <td>{rule.id}</td>
            <td>{rule.srcAddr}</td>
            <td>{rule.dstAddr}</td>
          </tr>)}
        </tbody>
      </table>
  }
}