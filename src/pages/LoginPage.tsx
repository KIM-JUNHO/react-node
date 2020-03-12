import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { fakeAuth } from '../utils/fakeAuth';
import PageContainer from '../components/PageContainer';

export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  return (
    <PageContainer>
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
            <div className="mt-16 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full">
                <div>
                  <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Sign in to your account
                  </h2>
                  <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                    hint : admin / q1w2e3
                  </p>
                </div>
                <form className="mt-8" action="#" method="POST">
                  <input type="hidden" name="remember" value="true" />
                  <div className="rounded-md shadow-sm">
                    <div>
                      <Field
                        name="username"
                        type="input"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                        placeholder="Username"
                      />
                    </div>
                    <div className="-mt-px">
                      <Field
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                      <label className="ml-2 block text-sm leading-5 text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-5">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      <span className="absolute left-0 inset-y pl-3">
                        <svg
                          className="h-5 w-5 text-gray-500 group-hover:text-gray-400 transition ease-in-out duration-150"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </PageContainer>
  );
}
