<template>
    <div class="cards">
        <card v-for="(starter, index) in starters" :key="index">

            <template v-slot:title>
                {{starter.name}} 
            </template>

            <template v-slot:content>
                <img :src="starter.sprite">
            </template>

            <template v-slot:description>
                <div v-for="(type, index) in starter.types" :key="index">
                    {{ type }}
                </div>
            </template>

        </card>
    </div>
</template>

<script>
import Card from './Card.vue'
const ids = [1, 4, 7]
const api = 'https://pokeapi.co/api/v2/pokemon'
export default {
    components: {
        Card
    },
    created() {
        this.fetchData()
    },
    data() {
        return {
            starters: []
        }
    },
    methods: {
        async fetchData() {
            const responces = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)))
            const data = await Promise.all(responces.map(res => res.json()))
            this.starters = data.map(datem => ({
                name: datem.name,
                sprite: datem.sprites.other['official-artwork'].front_default,
                types: datem.types.map(type => type.type.name)
            }))
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
</style>
