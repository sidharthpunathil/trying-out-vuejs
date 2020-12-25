<template>
    <div class="card">
        <div class="title">
            <slot name="title"/>
        </div>
        <div class="content">
            <slot name="content"/>
        </div>
        <div class="description">
            <slot name="description"/>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style  scoped>
    .card {
        border-radius: 8px;
        max-width: 200px;
        margin: 0 5px; 
        cursor: pointer;
        box-shadow: 0px 1px 9px darkgray;
        transition: 0.2s;
    }

    .title, .content, .description {
        padding: 16px;
        box-sizing: border-box;
        text-transform: capitalize;
        text-align: center;
    }

    .title, .content {
        border: 1px solid silver;
    }

    .title {
        font-size: 1.25em;
    }

    .card:hover {
        transition: 0.2s;
        box-shadow: 0px 1px 9px darkgray;
    }
</style>
