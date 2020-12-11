import { createApp } from 'vue/dist/vue.esm-browser.js'
// SFC: Single File component
// Options API: template option and data option
// v-model
// computed property
const app = createApp({
    template: `
    <button v-on:click="increment(5)">Increment</button>
    <p>{{ count }}</p>
    
    <div v-if="isEven()">
        Even
    </div>
    <div v-else>
        Odd
    </div>
    <div v-for="number in evenList">
        {{ number }} 
    </div>
    `,
    computed: {
        evenList() {
            return this.numbers.filter(this.isEven)
        }
    },
    data(){
        return {
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6]
        }
    },
    methods: {
        increment(value) {
            this.count += value
        },
        isEven() {
            return this.count % 2 === 0
        }
    }
}).mount('#app')

window.app = app