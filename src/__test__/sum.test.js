import { sum } from "../Component/sum";

test("Sum funxtion should calculate the sum of two number", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
