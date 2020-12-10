import { createApp } from 'vue/dist/vue.esm-browser.js'
// SFC: Single File component
// Options API: template option and data option
const app = createApp({
    template: `
    <p>{{ person }}</p>
    `,
    data(){
        return {
            msg: 'world',
            person: {
                name: 'Sidharth',
                age: 19
            }
        }
    }
}).mount('#app')
