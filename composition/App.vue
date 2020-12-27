<template>
    <div>
        <button @click="increment">{{ count }}</button>
        <button @click="a++">{{ a }}</button>
        <button @click="b++">{{ b }}</button>
    </div>
</template>

<script>
import { useNumbers } from './numbers'

export default {
    setup() {
        const {
            increment,
            count,
            a,
            b
        } = useNumbers()

        return {
                increment,
                count,
                a,
                b
            }
    }
    
}
</script>

<style scoped>

</style>