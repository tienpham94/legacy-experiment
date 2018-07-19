import React from "react"
import { render } from "react-dom"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"

console.log(Yup)

// With Field can remove onChange and values
// With Form can remove onSubmit=handleSubmit

const App = ({
  values, // contain current values of all inputs
  handleChange, // don't need to provide custom onChange function
  errors,
  touched, // Object { email: ...}
  isSubmitting
}) => (
  <Form>
    <div>
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
)

const FormikForm = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "", // Might not need initial data, can be email: ""
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "premium"
    }
  },
  // ValidationSchema gives us a set of error for the fields above as validation occur
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "tien@mail.tien") {
        setErrors({ email: "That email is already taken" })
      } else {
        resetForm()
      }
      setSubmitting(false)
      console.log(values)
    }, 2000)
    //current values
  }
})(App)

render(<FormikForm />, document.getElementById("root"))
