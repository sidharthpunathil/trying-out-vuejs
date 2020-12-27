<template>
    <div>
        <button @click="increment">{{ count }}</button>
        <button @click="increase('a')">{{ number.a }}</button>
        <button @click="increase('b')">{{ number.b }}</button>
        {{ total }}
    </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
    setup() {
        const count = ref(0)
        const number = reactive({
            a: 0,
            b: 0
        })
        const increment = () => {
            count.value += 1
        }

        const increase = (num) => {
            number[num] += 1
        }

        watchEffect(() => {
            console.log(number.a)
        })

        watch(number, (newVal) => {
            console.log(newVal.a, newVal.b)
        }, {
            immediate: true
        })

        const total = computed(() =>  count.value + number.a + number.b)

        console.log("setup")
        return {
            increment,
            count,
            number,
            increase,
            total
        }
    }
}
</script>

<style scoped>

</style>