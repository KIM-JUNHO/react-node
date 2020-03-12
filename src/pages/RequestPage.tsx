import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RULE, GET_RULES } from '../utils/gql';
import { Formik, Field, Form } from 'formik';
import { ruleValidation } from '../utils/validation';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PageContainer from '../components/PageContainer';

export default function RequestPage() {
  const [createRule] = useMutation(ADD_RULE);

  return (
    <PageContainer>
      <Formik
        initialValues={{ srcAddr: '', dstAddr: '' }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          createRule({
            variables: { srcAddr: data.srcAddr, dstAddr: data.dstAddr },
            refetchQueries: [{ query: GET_RULES }]
          });
          console.log('submit : ', data);
          setSubmitting(false);
        }}
        validationSchema={ruleValidation}
      >
        {({ values, errors, isSubmitting, handleSubmit }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="username"
                  name="username"
                  label="Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="department"
                  name="department"
                  label="Department"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="reason"
                  name="reason"
                  label="Reason"
                  fullWidth
                  multiline
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Field name="srcAddr">
                  {({ field, form, meta }) => (
                    <TextField
                      required
                      {...field}
                      label="Source IP"
                      fullWidth
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Field name="dstAddr">
                  {({ field, form, meta }) => (
                    <TextField
                      {...field}
                      required
                      label="Destination IP"
                      fullWidth
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField id="dstPort" name="dstPort" label="Port" fullWidth />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="protocol"
                  name="protocol"
                  label="Protocol"
                  fullWidth
                />
              </Grid>
            </Grid>
            <button className="my-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              Submit
            </button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </PageContainer>
  );
}
