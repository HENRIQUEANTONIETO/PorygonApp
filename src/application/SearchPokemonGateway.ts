import HttpClient from "./HttpClient";

export default class SearchPokemonGateway {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async byName(name: string): Promise<number> {
    const response = await this.httpClient.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    if (response.status === 404) {
      throw new Error(`Pokemon '${name}' not found!`);
    }

    return response.data.id;
  }
}
