const { sum } = require("../app");

test("is a basic test", () => {
  expect(sum(2, 2)).toBe(4);
});
