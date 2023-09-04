import { checkForName } from '../js/nameChecker';

global.alert = jest.fn();

describe("nameChecker", () => {
  test("should have alert popup", () => {
    const result = "Welcome, Captain!";
    expect(checkForName("Picard")).toEqual(1);
  })

  test("should not have alert popup", () => {
    const result = "Welcome, Captain!";
    expect(checkForName("TrungNT102")).toEqual(0);
  })
});