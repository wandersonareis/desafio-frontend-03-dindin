export const handleErrors = (err, setSpanWarning, setWarning) => {
    const newErrors = {};
    if (err.response?.data?.mensagem) {
        setSpanWarning(err.response.data.mensagem);
    } else if (err.name === "ValidationError") {
        err.inner.forEach((error) => {
            newErrors[error.path] = error.message;
        });
    } else {
        setSpanWarning("Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.");
    }
    setWarning(newErrors);
};

export const handleErrorss = ({response, name, inner, code}, setSpanWarning, setWarning) => {
  const newErrors = name === "ValidationError"
    ? inner.reduce((errors, error) => ({ ...errors, [error.path]: error.message }), {})
    : null;

  let errorMessage;
  if (code === "ECONNABORTED") {
    errorMessage = "A requisição excedeu o tempo limite. Por favor, tente novamente.";
  } else {
    errorMessage = response?.data?.mensagem ?? "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.";
  }

  setSpanWarning && setSpanWarning(errorMessage);
  setWarning && setWarning(newErrors);
};