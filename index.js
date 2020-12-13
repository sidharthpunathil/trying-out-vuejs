import { createApp } from 'vue/dist/vue.esm-browser.js'
// SFC: Single File component
// Options API: template option and data option
// v-model
// computed property
// v-on shorthand @
// v-bind: shorthand :
//input @input="input" :value="value"/>input  
//<input v-model="value" />

const hello = {
    template: `
    <h3>Hello, people</h3>
    `
}
const app = createApp({
    components: {
        hello
    },
    template: `
    <hello />
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
    <input v-model="value" />
    {{ value }}
    <div v-if="error">{{ error }}</div>
    `,
    computed: {
        evenList() {
           return this.numbers.filter(this.isEven)
        },
        error() {
            if (this.value.length < 7) {
                return "Too short"
            }
            if (this.value.length > 14) {
                return "too long"
            }
        }
    },
    data(){
        return {
            username: 'user',
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6],
            value: 'User'
        }
    },
    methods: {
        input($event) {
            this.value = $event.target.value
        },
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