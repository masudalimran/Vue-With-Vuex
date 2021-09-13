<template>
    <div>
        <!-- <p>Component Three</p> -->
        <Component4 />
    </div>
</template>

<script>
import Component4 from './Component4.vue'
    export default {
        name: 'Component3',
        components:{
            Component4
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