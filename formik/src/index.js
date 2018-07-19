import React from "react"
import { render } from "react-dom"
import { withFormik } from "formik"
import Yup from "yup"

const App = ({
  values, // contain current values of all inputs
  handleChange, // don't need to provide custom onChange function
  handleSubmit // just pass in and done
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={values.password}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

const FormikForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "", // Might not need initial data, can be email: ""
      password: password || ""
    }
  },
  handleSubmit(values) {
    //current values
    console.log(values)
  }
})(App)

render(<FormikForm email="tien@mail.tien" />, document.getElementById("root"))
