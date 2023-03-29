import * as yup from "yup";

export const schemaPasswordConfirmValidation = yup.object().shape({
  name: yup.string().min(3, "O nome deve ter pelo menos 3 caracteres").required("O nome é obrigatório"),
  email: yup.string().email("O e-mail deve ser um endereço válido").required("O e-mail é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não correspondem")
    .required("A confirmação da senha é obrigatória"),
});
