import { createApp } from 'vue/dist/vue.esm-browser.js'
// SFC: Single File component
// Options API: template option and data option
// v-model
// computed property
// v-on shorthand @
const app = createApp({
    template: `
    <button @:click="increment(1)">Increment</button>
    <p>{{ count }}</p>
    
    <div v-if="isEven()">
        Even
    </div>
    <div v-else>
        Odd
    </div>
    <div v-for="number in numbers">
        <div :class="getClass(number)">
            {{ number }} 
        </div>
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
        getClass(number)
        {
            if(this.isEven(number)) {
                return 'blue'
            }
            return 'green'
        },
        increment(value) {
            this.count += value
        },
        isEven(number) {
            return number % 2 === 0
        }
    }
}).mount('#app')

window.app = app