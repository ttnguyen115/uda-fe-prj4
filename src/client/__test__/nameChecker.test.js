import { checkForName } from '../js/nameChecker';

describe("nameChecker", () => {
  test("should return 1", () => {
    const result = "Welcome, Captain!";
    expect(checkForName("Picard")).toEqual(1);
  })

  test("should return 0", () => {
    const result = "Welcome, Captain!";
    expect(checkForName("TrungNT102")).toEqual(0);
  })
});