<template>
    <div class="input-wrapper">
        <div class="label">
            <label :for="name">{{ name }}</label>
            <div class="error">{{ error }}</div>
        </div>
        <input 
            :id="name"
            type="text"
            v-model="value"
        />
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            rules: {
                type: Object, // minimum and required
            }
        },
        data() {
            return {
                value: ''
            }
        },
        computed: {
            error() {
               if (this.rules.required && !this.value=== 0){
                  return 'Required' 
               }

               if(this.rules.min && this.value.length < this.rules.min){
                   return `Minimum length is ${this.rules.min}`
               }
            }
        }
    }
</script>
<style scoped>
    .input-wrapper {
        display: flex;
        flex-direction: column;
    }
    .label {
        display: flex;
        justify-content: space-between;
    }
    .error {
        color: red;
    }
    input {
        background: none;
        color: black;
        border: 1px solid silver;
        border-radius: 5px;
        padding: 10px; 
        font-size: 16px;
        margin-bottom: 6px;
    }
</style>