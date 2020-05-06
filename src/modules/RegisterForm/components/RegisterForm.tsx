import React from 'react'
import { MailOutlined, UserOutlined, LockOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { Link } from "react-router-dom"

import { Block, Button } from 'components'

const success = false

const RegisterForm : React.FC = () => (
  <div>
    <div className="auth__top">
      <h2>Регистрация</h2>
      <p>Для входа в чат, вам нужно зарегистрироваться</p>
    </div>
    <Block>
      {!success ? (
      <Form className="register-form">
        <Form.Item>
          <Input
            id="email"
            prefix={
              <MailOutlined />
            }
            size="large"
            type="text"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="fullname"
            prefix={
              <UserOutlined />
            }
            size="large"
            type="text"
            placeholder="Ваше имя"
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="password"
            prefix={
              <LockOutlined />
            }
            size="large"
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="confirmed"
            prefix={
              <LockOutlined />
            }
            size="large"
            type="password"
            placeholder="Подтвердить пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button
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