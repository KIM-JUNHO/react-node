import * as React from 'react';
import { Container } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_RULES } from '../utils/gql';

export default function HistoryPage() {
  const { loading, error, data } = useQuery(GET_RULES);
  if (loading) {
    return <div>loading...</div>;
  }
  if (data && data.Rules) {
    return (
      <Container>
        <div className="flex flex-col mt-10">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-bold text-gray-700 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-bold text-gray-700 uppercase tracking-wider">
                      Src IP
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-bold text-gray-700 uppercase tracking-wider">
                      Dst IP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.Rules.map(rule => (
                    <tr key={rule.id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                        {rule.id}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                        {rule.srcAddr}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-700">
                        {rule.dstAddr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    return <div>no data found</div>;
  }
}
