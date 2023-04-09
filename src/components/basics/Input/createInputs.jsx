import InputStyled, { NumberInputStyled, SelectStyled } from "./InputStyled";

const inputModels = {
  input: InputStyled,
  select: SelectStyled,
  number: NumberInputStyled
}
function FormInput({ inputType, ...rest }) {
  const Component = inputModels[inputType] || InputStyled;
  return <Component {...rest} />;
}

export function createInputs(inputModels) {
  return inputModels.map((inputModel, index) => <FormInput key={index} {...inputModel} />);
}
