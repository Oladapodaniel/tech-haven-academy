<template>
    <div>
        <Header />
        <Nuxt />
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    components: {
        Header
    },
    data() {
        return {}
    }
}
</script>

<style>
body {
    font-family: 'radian';
    /* font-size: 15px; */
    /* font-weight: 700; */
    background: #f9f9f9;
}
</style>