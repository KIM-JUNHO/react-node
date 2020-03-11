import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RULE, DELETE_RULE } from '../utils/gql';

export default function Request() {
  const [createRule] = useMutation(ADD_RULE);
  const [deleteRule] = useMutation(DELETE_RULE);
  return (
    <>
      <button
        onClick={() =>
          createRule({
            variables: { srcAddr: '70.80.151.11', dstAddr: '182.195.89.114' }
          })
        }
      >
        Add
      </button>

      <button
        onClick={() =>
          deleteRule({
            variables: { id: 13 }
          })
        }
      >
        Delete
      </button>
    </>
  );
}
