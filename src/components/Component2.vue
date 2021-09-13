<template>
    <div>
        <!-- <p>Component Two</p> -->
        <Component3 />
    </div>
</template>

<script>
import Component3 from './Component3.vue'
    export default {
        name: 'Component2',
        components: {
            Component3
        }
    }
</script>

<style lang="sass" scoped>

p
    color: red
button
    padding: 10px
    margin: 5px

</style>