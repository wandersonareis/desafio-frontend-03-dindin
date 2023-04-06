import InputStyled, { SelectStyled } from "../InputStyled";

function FormInput({ inputType, ...rest }) {
  if (inputType === "select") {
    return (
      <SelectStyled {...rest} />
    );
  }

  return <InputStyled {...rest} />;
}

export function createInputs(inputModels) {
  return inputModels.map((inputModel, index) => <FormInput key={index} {...inputModel} />);
}
