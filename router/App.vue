<template>
    <div>
        <h3>Hello this is app</h3>
        <router-link to="/hello">
            Hello
        </router-link>

        <router-link to="/posts">
            posts
        </router-link>
        <router-view />
    </div>
</template>

<script>

export default {

}
</script>

<style>

</style>