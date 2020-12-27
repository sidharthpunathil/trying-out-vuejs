
import { ref, reactive, computed, watch, watchEffect, onMounted } from 'vue'
export function useNumbers() {
    const count = ref(0)
    const a = ref(0)
    const b = ref(0)

    const increment = () => {
        count.value += 1
    }

    onMounted(() => {
        console.log("M working!")
    })

    console.log("setup")

    return {
        increment,
        count,
        a,
        b
    }
}