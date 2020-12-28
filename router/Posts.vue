<template>
    <div>
        <h4>Posts</h4>
        <router-link 
        v-for="post in testposts" 
        :key="post.id"
        :to="`/posts/${post.id}`"
        >
            {{ post.title }}    
        </router-link>
        <router-view />
    </div>
</template>

<script>
import { testposts } from '../microblog/testpost.js'

export default {
    setup() {
        return {
            testposts
        }
    }
}
</script>

<style>

</style>