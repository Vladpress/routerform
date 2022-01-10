export const validateFunction = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) errors.name = "To short..";
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 3) errors.lastName = "To short..";
  if (!values.birthDate) {
    errors.birthDate = "Required";
  } else if (values.birthDate.length < 3) errors.birthDate = "To short..";
  if (!values.sum) {
    errors.sum = "Required";
  } else if (values.birthDate.length < 1) errors.birthDate = "Not equal zero..";
  if (!values.patronymic) {
    errors.patronymic = "Required";
  } else if (values.birthDate.length < 3) errors.birthDate = "To short..";
  return errors;
};
