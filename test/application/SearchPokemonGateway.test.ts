import AxiosHttpClient from "../../src/infrastructure/AxiosHttpClient";
import SearchPokemonGateway from "../../src/application/SearchPokemonGateway";

const gateway = new SearchPokemonGateway(new AxiosHttpClient());
test("Should return pokemon'id", async function () {
  const id = await gateway.byName("pichu");

  expect(id).toBe(172);
});

test("Should return error when pokemon is not found", async function () {
  await expect(gateway.byName("pichuleco")).rejects.toThrow(
    new Error("Pokemon 'pichuleco' not found!")
  );
});
