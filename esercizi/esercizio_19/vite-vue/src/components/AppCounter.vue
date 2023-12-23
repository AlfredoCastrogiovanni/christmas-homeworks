<script>
    export default {
    name: "AppCounter",
    props: {
        counter: {
            type: Number,
            required: true
        }
    }
    }
</script>

<template>
    <div class="counter">{{ counter }}</div>
</template>

<style lang="scss" scoped>
    .counter {
        width: 100px;
        height: 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;
        font-weight: 800;

        border: 1px solid black;
        border-radius: 50%;

        cursor: pointer;
    }
</style>