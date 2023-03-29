export function toBrl(value) {
  const localValue = value || 0;
  return (localValue / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatMoney(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{1,2})$/, ",$1")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function formatToCents(value) {
  const onlyNumbers = value.replace(/\D/g, "");
  return parseInt(onlyNumbers);
}
