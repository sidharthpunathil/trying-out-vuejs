<template>
    <div>
        <div v-if="post"> 
            <h4>{{ post.title }}</h4>
            <p>
                {{ post.content }}
            </p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router/dist/vue-router.esm-bundler.js'
import { testposts } from '../microblog/testpost.js'

export default {
    setup() {
        const route = useRoute()
        console.log(route)
        const post = computed(() => {
            return testposts.find(
                x => x.id ===  parseInt(route.params.id)
            )
        })

        return {
            post
        }
    }
}
</script>

<style>

</style>