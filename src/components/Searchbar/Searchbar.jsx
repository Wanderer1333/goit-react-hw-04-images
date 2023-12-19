import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { StyledForm, StyledHeader } from './Searchbar.styled';

const schema = Yup.object({
  title: Yup.string()
    .min(2)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Please enter a valid title'
    )
    .max(18)
    .required(),
}).required();

export const Searchbar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    onSearch(values.title);
    // actions.resetForm();
  };

  return (
    <StyledHeader>
      <Formik
        initialValues={{ title: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <Field
            className="input"
            name="title"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </StyledHeader>
  );
};
