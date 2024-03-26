import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import { useId } from "react";
import css from "../LoginForm/LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});

export default function LoginForm() {
  const emailFieldId = useId();
  const passwordFieldIId = useId();
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  function handleSubmit(values, actions) {
    dispatch(login(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label}>Email</label>
          <Field
            className={css.input}
            type="text"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" as="span" className="css.error" />
        </div>
        <div className={css.container}>
          {" "}
          <label className={css.label}>Password</label>
          <Field
            className={css.input}
            type="text"
            name="password"
            id={passwordFieldIId}
          />
          <ErrorMessage name="password" as="span" className="css.error" />
        </div>
        <button className={css.btn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
}
