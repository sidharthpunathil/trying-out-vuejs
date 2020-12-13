import { createApp } from 'vue/dist/vue.esm-browser.js'
// SFC: Single File component
// Options API: template option and data option
// v-model
// computed property
// v-on shorthand @
// v-bind: shorthand :
//input @input="input" :value="value"/>input  
//<input v-model="value" />

const Num = {
    props: {
        number: {
            type: Number,
            required: true
        },
    },
    template: `
    <div :class="getClass(number)">
        {{ number }} 
    </div>
    `,
    methods: {
        isEven(number) {
            return number % 2 === 0
        },
        getClass(number)
        {
            if(this.isEven(number)) {
                return 'blue'
            }
            return 'green'
        }
    }
}

const app = createApp({
    components: {
        Num
    },
    template: `
    <button @:click="increment(1)">Increment</button>
    <p>{{ count }}</p>
    
    <num v-for="mynumber in numbers" :number="mynumber"/>
    
    <input v-model="value" />
    {{ value }}
    <div v-if="error">{{ error }}</div>
    `,
    computed: {
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
        increment(value) {
            this.count += value
        },
    }
}).mount('#app')

window.app = app