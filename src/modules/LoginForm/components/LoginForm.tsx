import React from 'react'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { Link } from "react-router-dom"
import { FormikProps } from 'formik'

import { validateField } from "utils/helpers"
import { Block, Button } from 'components'

interface FormValues {
  email         : string
  fullname      : string
  password      : string
  confirmed     : string
}

const LoginForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
} : FormikProps<FormValues> ) => (
  <div>
    <div className="auth__top">
      <h2>Войти в систему</h2>
      <p>Пожалуйста, войдите в свой аккаунт</p>
    </div>
    <Block>
      <Form onSubmitCapture={handleSubmit} className="register-form">
        <Form.Item
          validateStatus={validateField("email", touched, errors)}
          help={!touched.email ? " " : errors.email}
          hasFeedback
        >
          <Input
            id="email"
            prefix={
              <MailOutlined />
            }
            size="large"
            type="text"
            placeholder="Ваше имя"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={validateField("password", touched, errors)}
          help={!touched.password ? " " : errors.password}
          hasFeedback
        >
          <Input
            id="password"
            prefix={
              <LockOutlined />
            }
            size="large"
            type="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={handleSubmit}
            type="primary"
            size="large"
          >
            Войти в аккаунт
          </Button>
        </Form.Item>
        <Link className="auth__register-link" to="/register">
          Зарегистрироваться
        </Link>
      </Form>
    </Block>
  </div>
)

export default LoginForm