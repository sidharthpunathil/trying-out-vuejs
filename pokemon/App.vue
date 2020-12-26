<template>
    <div>
        <pokemon-card :pokemons="starters"
        :selected="selected"
        @pokemonClicked="fetchEvolutions"
        />

        <pokemon-card :pokemons="evolutions"
        />
    </div>
</template>

<script>
import Card from './Card.vue'
import PokemonCard from './PokemonCard.vue'
const STARTER_IDS = [1, 4, 7]
const api = 'https://pokeapi.co/api/v2/pokemon'
export default {
    components: {
        Card,
        PokemonCard
    },
    async created() {
        const starters = await this.fetchData(STARTER_IDS)
        this.starters = starters;
    },
    data() {
        return {
            starters: [],
            evolutions: [],
            selected: null
        }
    },
    methods: {
        async fetchEvolutions(pokemon) {
            this.selected = pokemon.id
            this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
        },
        async fetchData(ids) {
            const responces = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)))
            const data = await Promise.all(responces.map(res => res.json()))
            return data.map(datem => ({
                name: datem.name,
                id: datem.id,
                sprite: datem.sprites.other['official-artwork'].front_default,
                types: datem.types.map(type => type.type.name)
            }))
        }
    }
}
</script>

<style  scoped>
</style>
