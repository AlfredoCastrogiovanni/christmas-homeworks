<script>
    import AppCounter from './components/AppCounter.vue';
    import AppTrigger from './components/AppTrigger.vue';

    export default {
    name: "AppVue",
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() { this.counter++; }
    },
    components: {
        AppCounter,
        AppTrigger
    }
    }
</script>

<template>
    <main>
        <AppTrigger @trigger="increment"/>
        <AppCounter :counter="counter"/>
    </main>
</template>

<style lang="scss">
    @use './style/general.scss' as *;
</style>
