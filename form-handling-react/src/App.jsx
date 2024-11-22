import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm.jsx';
import FormikForm from './components/FormikForm.jsx';

const App = () => {
  const [activeForm, setActiveForm] = useState('formik'); // Default to FormikForm

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Form Demo</h1>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setActiveForm('state')}
          style={{
            marginRight: '10px',
            padding: '10px 15px',
            border: '1px solid #ccc',
            backgroundColor: activeForm === 'state' ? '#4CAF50' : 'white',
            color: activeForm === 'state' ? 'white' : '#000',
            cursor: 'pointer',
          }}
        >
          UseState Form
        </button>
        <button
          onClick={() => setActiveForm('formik')}
          style={{
            padding: '10px 15px',
            border: '1px solid #ccc',
            backgroundColor: activeForm === 'formik' ? '#4CAF50' : 'white',
            color: activeForm === 'formik' ? 'white' : '#000',
            cursor: 'pointer',
          }}
        >
          Formik Form
        </button>
      </div>

      {activeForm === 'state' ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
};

export default App;