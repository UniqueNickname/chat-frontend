type valuesType = {
  [key : string] : string
}

type rulesType = {
  [key : string] :  ( value : string ) => void
}

export default ( isAuth : boolean, values : valuesType, errors : valuesType ) => {
  const rules : rulesType = {
    email: ( value ) => {
      if (!value) {
        errors.email = "Введите E-Mail"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Неверный E-Mail"
      }
    },
    password: ( value ) => {
      if (!value) {
        errors.password = "Введите пароль"
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth ? "Неверный пароль" : "Слишком лёгкий пароль"
      }
    },
    fullname: ( value ) => {
      if (!value) {
        errors.fullname = "Введите имя"
      }
    },
    confirmed: ( value ) => {
      if (!value) {
        errors.confirmed = "Подтвердите пароль"
      } else if (values.password !== value) errors.confirmed = "Пароли не совпадают"
    }
  }

  Object.keys(values).forEach(( key : string ) => rules[key] && rules[key](values[key]))
}