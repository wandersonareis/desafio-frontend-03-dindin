import React from "react";
import Header from "../../components/Header";
import { Background } from "../../components/styled";
import { SignUpForm } from "../../components/form";

export default function SignUp() {
  return (
    <Background>
      <Header />
      <SignUpForm />
    </Background>
  );
}
