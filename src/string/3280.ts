function convertDateToBinary(date: string): string {
  let dateInBinary: string = "";

  date.split("-").forEach((datePart) => {
    let dateInNumber: number = Number.parseInt(datePart);
    dateInBinary += dateInNumber.toString(2);
    dateInBinary += "-";
  });

  return dateInBinary.substring(0, dateInBinary.length - 1);
}

// Example 1
console.log(convertDateToBinary("2080-02-29"));

// Example 2
console.log(convertDateToBinary("1900-01-01"));
