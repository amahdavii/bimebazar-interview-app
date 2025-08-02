export function isValidIranianNationalCode(input: string): boolean {
  if (!/^\d{10}$/.test(input)) return false;
  const check = +input[9];
  const sum = input
    .split("")
    .slice(0, 9)
    .reduce((total, num, index) => total + +num * (10 - index), 0);
  const remainder = sum % 11;
  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
}
