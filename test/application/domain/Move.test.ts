import Move from "../../../src/application/domain/Move";

test("Should have a Move", function () {
  const move: Move = new Move(1, "Thunder-shock", 100, 90, 0);
  expect(move.id).toBe(1);
  expect(move.name).toBe("Thunder-shock");
  expect(move.accuracy).toBe(100);
  expect(move.power).toBe(90);
  expect(move.priority).toBe(0);
});
