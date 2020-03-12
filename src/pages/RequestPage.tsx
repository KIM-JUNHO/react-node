import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RULE } from '../utils/gql';
import { Formik, Field, Form } from 'formik';
import { ruleValidation } from '../utils/validation';

export default function RequestPage() {
  const [createRule] = useMutation(ADD_RULE);

  return (
    <Formik
      initialValues={{ srcAddr: '', dstAddr: '' }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        // make async call
        createRule({
          variables: { srcAddr: data.srcAddr, dstAddr: data.dstAddr }
        });
        console.log('submit : ', data);
        setSubmitting(false);
      }}
      validationSchema={ruleValidation}
    >
      {({ values, errors, isSubmitting, handleSubmit }) => (
        <Form>
          <Field name="srcAddr" type="input" />
          <Field name="dstAddr" type="input" />
          <div>
            <button type="submit">add</button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}
