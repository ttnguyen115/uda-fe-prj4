import { isUrlValid } from '../js/validationHandler';

describe("isUrlValid", () => {
  test("should return true", () => {
    const result = "Welcome, Captain!";
    expect(isUrlValid("https://www.google.com/")).toBe(true)
  })

  test("should return false", () => {
    const result = "Welcome, Captain!";
    expect(isUrlValid("TrungNT102")).toEqual(false);
  })
});