<template>
    <div>
        <!-- <p>Component Four</p> -->
        <Counter />
    </div>
</template>

<script>
import Counter from './Counter.vue'
    export default {
        name: 'Component4',
        components: {
            Counter
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