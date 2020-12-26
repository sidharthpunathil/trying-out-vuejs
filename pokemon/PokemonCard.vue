<template>
    <div class="cards">
        <card v-for="(pokemon, index) in pokemons" 
        :key="index" 
        @click="click(pokemon)"
        :class="{ opace: selected && pokemon.id!==selected}"
        class="card"
        >
            <template v-slot:title>
                {{pokemon.name}} #{{ pokemon.id }}
            </template>

            <template v-slot:content>
                <img :src="pokemon.sprite">
            </template>

            <template v-slot:description>
                <div v-for="(type, index) in pokemon.types" :key="index">
                    {{ type }}
                </div>
            </template>

        </card>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    components: {
        Card
    },
    props: {
        pokemons: {
            type: Array
        },
        selected: {
            type: Number
        }
    },
    methods: {
        click(pokemon) {
            this.$emit('pokemonClicked', pokemon) 
        }
    }

}

</script>

<style  scoped>
    .cards {
        display: flex;
    }
    img {
        width: 100%;
    }

    .card:hover {
        opacity: 1.0;
    }

    .opace {
        opacity: 0.5;
    }
</style>

