import Pokemon from "../../../src/application/domain/Pokemon";

const pokemon = new Pokemon(1, "Pikachu");
test("Should have a Pokemon", function () {
  expect(pokemon.id).toBe(1);
});

test("Pokemon ahould have some moves", function () {
  pokemon.addMove({
    id: 1,
    name: "Thunder-shock",
    accuracy: 100,
    power: 80,
    priority: 0,
  });
  pokemon.addMove({
    id: 2,
    name: "Thunder-wave",
    accuracy: 90,
    power: 70,
    priority: 1,
  });

  expect(pokemon.id).toBe(1);
  expect(pokemon.name).toBe("Pikachu");
  expect(pokemon.getMoves()).toHaveLength(2);
});
