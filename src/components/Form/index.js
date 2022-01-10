import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { validateFunction } from "../../validateFunction";
import { useNavigate } from "react-router-dom";
//Context
import userContext from "../../context";
import "./form.scss";

const Form = () => {
  const [flag, setFlag] = useState(false); // Improove placeholder for number and date

  const { setUserInfo } = useContext(userContext); //Context

  const navigate = useNavigate();

  const onSuibmitHandle = (values) => {
    const userInfo = {
      name: values.name,
      lastName: values.lastName,
      patronymic: values.patronymic,
      birthDate: values.birthDate,
      email: values.email,
      sum: values.sum,
    };
    //set localstorage
    localStorage.setItem("user", JSON.stringify(userInfo));
    //set context
    setUserInfo(userInfo);
    //redirect
    navigate("/thanks");
  };

  return (
    <div className="form__wrapper">
      {/* Use formik object     */}
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          patronymic: "",
          birthDate: "",
          email: "",
          sum: "",
        }}
        validate={(values) => validateFunction(values)}
        onSubmit={(values, { setSubmitting }) => {
          onSuibmitHandle(values);
        }}
      >
        {/* Magik values */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__input-wrap">
                <input
                  placeholder="Name"
                  className="form__input"
                  style={{
                    borderBottom:
                      errors.name && touched.name
                        ? "1px solid red"
                        : "1px solid transparent",
                  }}
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                <p className="form__input-error">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <div className="form__input-wrap">
                <input
                  placeholder="last name"
                  className="form__input"
                  style={{
                    borderBottom:
                      errors.lastName && touched.lastName
                        ? "1px solid red"
                        : "1px solid transparent",
                  }}
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <p className="form__input-error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>
              <div className="form__input-wrap">
                <input
                  placeholder="Patronymic"
                  className="form__input"
                  style={{
                    borderBottom:
                      errors.patronymic && touched.patronymic
                        ? "1px solid red"
                        : "1px solid transparent",
                  }}
                  type="text"
                  name="patronymic"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.patronymic}
                />
                <p className="form__input-error">
                  {errors.patronymic && touched.patronymic && errors.patronymic}
                </p>
              </div>
              <div className="form__input-wrap">
                <input
                  placeholder="Email"
                  className="form__input"
                  style={{
                    borderBottom:
                      errors.email && touched.email
                        ? "1px solid red"
                        : "1px solid transparent",
                  }}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="form__input-error">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="form__input-wrap">
                <input
                  placeholder="Birth date"
                  className="form__input"
                  style={{
                    borderBottom:
                      errors.birthDate && touched.birthDate
                        ? "1px solid red"
                        : "1px solid transparent",
                  }}
                  type={flag ? "date" : "text"}
                  name="birthDate"
                  onChange={handleChange}
                  onFocus={() => {
                    setFlag(true);
                  }}
                  onBlur={() => {
                    setFlag(false);
                    return handleBlur;
                  }}
                  value={values.birthDate}
                />
                <p className="form__input-error">
                  {errors.birthDate && touched.birthDate && errors.birthDate}
                </p>
              </div>
              <div className="form__input-wrap">
                <input
                  placeholder="Sum"
                  className="form__input"
                  style={{
                    borderBottom:
                      errors.sum && touched.sum
                        ? "1px solid red"
                        : "1px solid transparent",
                  }}
                  type="number"
                  name="sum"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sum}
                />
                <p className="form__input-error">
                  {errors.sum && touched.sum && errors.sum}
                </p>
              </div>
              <button
                className="form__input-submit"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
