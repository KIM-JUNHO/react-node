import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { fakeAuth } from '../utils/fakeAuth';

export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        // make async call
        fakeAuth.authenticate(data.username, data.password, () => {
          history.replace(from);
        });
        setSubmitting(false);
      }}
    >
      {({ values, errors, isSubmitting, handleSubmit }) => (
        <Form>
          <Field name="username" type="input" />
          <Field name="password" type="input" />
          <div>
            <button type="submit">login</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
