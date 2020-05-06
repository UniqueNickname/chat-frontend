import React from 'react'
import { MailOutlined, UserOutlined, LockOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { Link } from "react-router-dom"
import { FormikProps } from 'formik'

import { validateField } from "utils/helpers"
import { Block, Button } from 'components'

const success = false

interface FormValues {
  email         : string
  fullname      : string
  password      : string
  confirmed     : string
}

const RegisterForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
} : FormikProps<FormValues> ) => (
  <div>
    <div className="auth__top">
      <h2>Регистрация</h2>
      <p>Для входа в чат, вам нужно зарегистрироваться</p>
    </div>
    <Block>
      {!success ? (
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
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={validateField("fullname", touched, errors)}
          help={!touched.fullname ? " " : errors.fullname}
          hasFeedback
        >
          <Input
            id="fullname"
            prefix={
              <UserOutlined />
            }
            size="large"
            type="text"
            placeholder="Ваше имя"
            value={values.fullname}
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
        <Form.Item
          validateStatus={validateField("confirmed", touched, errors)}
          help={!touched.confirmed ? " " : errors.confirmed}
          hasFeedback
        >
          <Input
            id="confirmed"
            prefix={
              <LockOutlined />
            }
            size="large"
            type="password"
            placeholder="Подтвердить пароль"
            value={values.confirmed}
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
            Зарегистрироваться
          </Button>
        </Form.Item>
        <Link className="auth__register-link" to="/login">
          Войти в аккаунт
        </Link>
      </Form>
      ) : (
        <div className="auth__success-block">
          <div>
            <InfoCircleTwoTone />
          </div>
          <h2>Подтвердите свой аккаунт</h2>
          <p>
            На Вашу почту отправлено письмо с ссылкой на подтверждение
            аккаунта.
          </p>
        </div>
      )}
    </Block>
  </div>
)

export default RegisterForm