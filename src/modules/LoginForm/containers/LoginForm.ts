import { withFormik } from 'formik'
import { default as LoginForm } from '../components/LoginForm'
import validateForm from "utils/validate"

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    email       : "",
    fullname    : "",
    password    : "",
    confirmed   : ""
  }),

  validate: values => {
    let errors = {}

    validateForm(false, values, errors)

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: "LoginForm"
})(LoginForm)