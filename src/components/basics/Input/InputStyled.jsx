import React from "react";
import styled from "@emotion/styled";

const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 449px;
  margin-bottom: 2%;

  @media (min-width: 967px) {
    width: 22rem;
  }
`;

const InputLabel = styled.label`
  text-align: left;
  font-size: 1.2rem;
  color: black;
  margin-bottom: 0.1rem;
`;

const InputElement = styled.input`
  font-size: 1.2rem;
  border: solid 1px rgb(85, 85, 85);
  border-radius: 5px;
  height: 3.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const Prefix = styled.span`
  position: absolute;
  top: 67%;
  left: 1.2rem;
  font-size: 1.2rem;
  transform: translateY(-50%);
`;

const NumberInput = styled(InputElement)`
  padding-left: 3rem;
`;
const SelectElement = styled(InputElement.withComponent("select"))``;

function InputStyled({ name, label, placeholder, type, value, onSelect, onChange }) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputElement name={name} type={type} placeholder={placeholder} value={value} onSelect={onSelect} onChange={onChange} autocomplete required spellcheck="false" />
    </InputContainer>
  );
}

export function NumberInputStyled({ name, label, placeholder, type, value, onSelect, onChange }) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>

      <NumberInput name={name} type={type} placeholder={placeholder} value={value} onSelect={onSelect} onChange={onChange} />
      <Prefix>R$</Prefix>
    </InputContainer>
  );
}

export function SelectStyled({ name, label, options, value, onSelect, onChange }) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <SelectElement name={name} value={value} onSelect={onSelect} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.descricao}
          </option>
        ))}
      </SelectElement>
    </InputContainer>
  );
}

export default InputStyled;