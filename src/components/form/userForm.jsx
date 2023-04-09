import { createInputs } from "../basics/Input/createInputs";

export default function UserForm({ handleSelect, name, email, password, confirmPassword }) {

  const inputModels = [
    {
      inputType: "input",
      name: "name",
      label: "Nome",
      placeholder: "Digite seu nome",
      type: "text",
      onSelect: handleSelect,
      ...name,
    },
    {
      inputType: "input",
      name: "email",
      label: "E-mail",
      placeholder: "Digite seu e-mail",
      type: "email",
      onSelect: handleSelect,
      autocomplete: "email",
      ...email,
    },
    {
      inputType: "input",
      name: "password",
      label: "Senha",
      placeholder: "Digite sua senha",
      type: "password",
      onSelect: handleSelect,
      required: true,
      autocomplete: "new-password",
      ...password,
    },
    {
      inputType: "input",
      name: "confirmPassword",
      label: "Senha",
      placeholder: "Confirme sua senha",
      type: "password",
      onSelect: handleSelect,
      required: true,
      autocomplete: "new-password",
      ...confirmPassword,
    },
  ];

  const inputs = createInputs(inputModels);

  return inputs;
}
