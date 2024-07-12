type Input = {
  id: string
  type: string
  name: string
  placeholder: string
  autocomplete: string
  icon_eye?: string
  icon_eye_slash?: string
}

type Form = {
  inputs: Input[]
  description: string
  title: string
  button_confirm: string
  button_change_auth: string
}

type Auth = {
  form_login: Form
  form_register: Form
}
