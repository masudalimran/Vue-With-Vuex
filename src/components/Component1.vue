<template>
    <div>
        <!-- <p>Component One</p> -->
        <Component2 />
    </div>
</template>

<script>
import Component2 from './Component2.vue'
    export default {
        name: 'Component1',
        components: {
            Component2
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