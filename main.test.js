import { test, expect } from "vitest";
import { checkVetVisits } from "./main";

test("pet has not visited in 3 years and needs to be taken off the register", function () {
  //Arrange
  const today = new Date();

  const visitDatesArray = [
    {
      name: "Socks",
      lastVisit: `${new Date(
        today.getFullYear() - 3,
        today.getMonth(),
        today.getDate() - 1
      )}`,
    },
  ];

  const expected =
    "Socks has not visited in 3 years and needs to be taken off the register.";

  //Act
  const actual = checkVetVisits(visitDatesArray);

  //Assert
  expect(actual).toBe(expected);
});

test("pet has not visited in 3 years and needs to be taken off the register", function () {
  //Arrange
  const today = new Date();

  const visitDatesArray = [
    {
      name: "Mowgli",
      lastVisit: `${new Date(
        today.getFullYear() - 3,
        today.getMonth(),
        today.getDate() + 1
      )}`,
    },
  ];

  const expected = undefined;

  //Act
  const actual = checkVetVisits(visitDatesArray);

  //Assert
  expect(actual).toBe(expected);
});
