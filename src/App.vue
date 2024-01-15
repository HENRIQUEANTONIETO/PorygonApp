<script setup lang="ts">
import { ref } from "vue";
import SearchPokemonGateway from "./application/SearchPokemonGateway";
import AxiosHttpClient from "./infrastructure/AxiosHttpClient";
import Pokemon from "./application/domain/Pokemon";

const pokemonNameSearch = ref("");
const pokemon = ref<Pokemon | null>(null);
const errorMessage = ref("");
const searchPokemonGateway = new SearchPokemonGateway(new AxiosHttpClient());
async function searchPokemon() {
  try {
    errorMessage.value = "";

    const id = await searchPokemonGateway.byName(pokemonNameSearch.value);
    pokemon.value = new Pokemon(id, pokemonNameSearch.value);
  } catch (error: any) {
    pokemon.value = null;
    errorMessage.value = error.message;
  }
}
</script>

<template>
  <input
    class="pokemon-name-search"
    placeholder="Enter Pokemon Name"
    type="text"
    v-model="pokemonNameSearch"
  />
  <button class="pokemon-button-search" @click="searchPokemon">Search</button>
  <div class="error-message" v-if="errorMessage">
    {{ errorMessage }}
  </div>
  <div class="pokemon-id" v-if="pokemon">#{{ pokemon.id }}</div>
  <div class="pokemon-moves">
    <div class="move-card">
      <div class="move-name-0">Name</div>
      <div class="move-accuracy-0">Accuracy</div>
      <div class="move-power-0">Power</div>
      <div class="move-priority-0">Priority</div>

      <div
        v-for="(move, index) in pokemon?.getMoves()"
        :key="index"
        class="move-card"
      >
        <div :class="`move-name-${index + 1}`">{{ move.name }}</div>
        <div :class="`move-accuracy-${index + 1}`">{{ move.accuracy }}</div>
        <div :class="`move-power-${index + 1}`">{{ move.power }}</div>
        <div :class="`move-priority-${index + 1}`">{{ move.priority }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
