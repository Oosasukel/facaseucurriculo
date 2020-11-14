/** The format should be like 'dd/MM/yyy' */
export function dateFormat(date: Date, format: string){
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dayString = day < 10 ? '0' + day.toString() : day.toString();
  const monthString = month < 10 ? '0' + month.toString() : month.toString();
  const yearString = year.toString();

  let dateFormatted = format.replace('dd', dayString);
  dateFormatted = dateFormatted.replace('MM', monthString);
  dateFormatted = dateFormatted.replace('d', day.toString());
  dateFormatted = dateFormatted.replace('M', month.toString());
  dateFormatted = dateFormatted.replace('yyyy', yearString);

  return dateFormatted;
}