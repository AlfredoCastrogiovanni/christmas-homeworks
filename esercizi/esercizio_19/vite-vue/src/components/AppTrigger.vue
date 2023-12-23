<script>
    export default {
    name: "AppTrigger"
    }
</script>

<template>
    <div class="trigger" @click="$emit('trigger')"></div>
</template>

<style lang="scss" scoped>
    .trigger {
        width: 100px;
        height: 100px;

        background-color: red;

        border: 1px solid black;
        border-radius: 50%;

        cursor: pointer;
        transition: border 0.2 ease-in-out;

        &:hover {
            border-width: 3px;
        }
    }
</style>