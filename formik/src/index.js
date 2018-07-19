import React from "react"
import { render } from "react-dom"
import { withFormik, Form, Field } from "formik"
import Yup from "yup"

// With Field can remove onChange and values
// With Form can remove onSubmit=handleSubmit

const App = ({
  values, // contain current values of all inputs
  handleChange // don't need to provide custom onChange function
}) => (
  <Form>
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button type="submit">Submit</button>
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
  handleSubmit(values) {
    //current values
    console.log(values)
  }
})(App)

render(<FormikForm email="tien@mail.tien" />, document.getElementById("root"))
