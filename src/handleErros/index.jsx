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
