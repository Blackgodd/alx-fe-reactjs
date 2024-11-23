import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formikForm = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required.'),
    email: Yup.string()
      .email('Invalid email address.')
      .required('Email is required.'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters.')
      .required('Password is required.'),
  });

  // Initial Form Values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Form Submission Handler
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    resetForm();
    alert('Registration Successful!');
  };

  return (
    <div>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                name="username"
                id="username"
              />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: 'red' }}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: 'red' }}
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: 'red' }}
              />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default formikForm;
