import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { validationSchema } from './validationSchema';
import {
  FormContainer,
  FormEl,
  FormLabel,
  FormInput,
  ErrorMessageForUser,
  FormButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ ...values });
    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormEl>
            <FormLabel htmlFor="name">
              Name
              <FormInput
                type="text"
                name="name"
                placeholder="Please enter name..."
              />
              <ErrorMessageForUser name="name" component="div" />
            </FormLabel>
            <FormLabel htmlFor="number">
              Number
              <FormInput
                type="tel"
                name="number"
                placeholder="Please enter a phone number..."
              />
              <ErrorMessageForUser name="number" component="div" />
            </FormLabel>
            <FormButton type="submit" disabled={isSubmitting}>
              Add contact
            </FormButton>
          </FormEl>
        )}
      </Formik>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
