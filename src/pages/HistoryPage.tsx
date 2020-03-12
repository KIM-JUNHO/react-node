import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_RULES } from '../utils/gql';

export default function HistoryPage() {
  const { loading, error, data } = useQuery(GET_RULES);
  if (loading) {
    return <div>loading...</div>;
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
          {data.Rules.map(rule => (
            <tr key={rule.id}>
              <td>{rule.id}</td>
              <td>{rule.srcAddr}</td>
              <td>{rule.dstAddr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <div>no data found</div>;
  }
}
