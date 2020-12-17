<template>
    <div>
        <form class="form" @submit.prevent="submit">
            <my-input 
                name="Username"
                :rules="{ required: true, min: 5}"
                :value="username.value"
                @update="update"
                type="text"
            />
            <my-input 
                name="Password"
                :rules="{ required: true, min: 8}"
                :value="password.value"
                @update="update"
                type="password"
            />

            <my-button 
                color="white"
                background="red"
                :disabled="!valid"
            />
        </form>
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
                username: {
                    value: 'user',
                    valid: false
                },
                password: {
                    value: '',
                    valid: false
                }
            }
        },
        computed: {
            valid() {
                return this.username.valid && this.password.valid
            }
        },
        methods: {
            submit() {
            },
            update(payload) {
                this[payload.name.toLowerCase()] = {
                    value: payload.value,
                    valid: payload.valid 
                }
            }
        }
   }

</script>
<style>
    body {
        font-family:  Arial;
    }

    .form {
        max-width: 400px;
        width: 50%;
    }
</style>