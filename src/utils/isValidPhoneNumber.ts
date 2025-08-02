export function isValidIranianPhoneNumber(input: string): boolean {
  return /^(09\d{9}|9\d{9})$/.test(input);
}
