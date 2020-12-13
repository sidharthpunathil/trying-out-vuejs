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
        }
    },
    template: `
    <button :class="getClass(number)" @click="handleClick">
        {{ number }} 
    </button>
    `,
    methods: {
        handleClick(){
            this.$emit('chosen', this.number)
        },
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
        <num v-for="number in numbers" :number="number" @chosen="putInArray" />
        <h3>Clicked numbers</h3>
        <num v-for="number in clickedNumbers" :number="number" />
    `,
    data(){
        return {
            numbers: [1, 2, 3, 4, 5, 6],
            clickedNumbers: []
        }
    },
    methods: {
        putInArray(number){
            console.log(number)
            this.clickedNumbers.push(number)
        },
    }
}).mount('#app')

window.app = app