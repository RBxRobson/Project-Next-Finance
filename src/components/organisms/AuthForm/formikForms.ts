import { useFormik, FormikProps } from 'formik'
import * as Yup from 'yup'

export interface FormRegister {
  firstName: string
  lastName: string
  emailRegister: string
  passwordRegister: string
}

export const useFormRegisterFormik = (): FormikProps<FormRegister> => {
  return useFormik<FormRegister>({
    initialValues: {
      firstName: '',
      lastName: '',
      emailRegister: '',
      passwordRegister: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'O nome deve conter no mínimo 3 caracteres')
        .required('O campo nome é obrigatório'),
      lastName: Yup.string()
        .min(3, 'O sobrenome deve conter no mínimo 3 caracteres')
        .required('O campo sobrenome é obrigatório'),
      emailRegister: Yup.string()
        .email('Insira um endereço de email válido')
        .required('O campo de email é obrigatório'),
      passwordRegister: Yup.string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres')
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          'A senha deve conter no mínimo um símbolo (ex: @, #, $)'
        )
        .matches(/\d/, 'A senha deve conter no mínimo um número')
        .matches(/[A-Z]/, 'A senha deve conter no mínimo uma letra maiúscula')
        .matches(/[a-z]/, 'A senha deve conter no mínimo uma letra minúscula')
        .required('O campo de senha é obrigatório')
    }),
    onSubmit: () => {
      window.alert(
        'A funcionalidade de cadastro ainda não foi implementada com banco de dados.'
      )
    }
  })
}
