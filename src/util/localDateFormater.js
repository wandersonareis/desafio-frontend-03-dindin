export function toPtBrDateFormatter(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function toPtBrWeekDay(date) {
  return new Date(date).toLocaleDateString("pt-BR", { weekday: "long" });
}

export function onlyDate(date) {
  const dateParse = new Date(date)
  return dateParse.toISOString().slice(0, 10);
}

export function toIsodateString(date) {
  const now = new Date();
  const timeString = now.toLocaleTimeString('pt-BR', { hour12: false });
  const dateTimeString = `${date}T${timeString}.000Z`;
  const dateTime = new Date(dateTimeString);
  return dateTime.toISOString();
}
