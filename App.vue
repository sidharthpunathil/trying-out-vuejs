<template>
    <div>
        <my-input 
            name="Username"
            :rules="{ required: true, min: 5}"
        />
        <my-input 
            name="Password"
            :rules="{ required: true, min: 8}"
        />

        <my-button 
            color="white"
            background="red"
            :disabled="!valid"
        />
    </div>
</template>

<script>
    import myButton from './myButton.vue'
    import myInput from './myInput.vue'
    export default {
        components: {
            myButton,
            myInput
        },
        data() {
            return {
                valid: true 
            }
        }
   }

</script>
<style>
    body {
        font-family:  Arial;
    }
</style>