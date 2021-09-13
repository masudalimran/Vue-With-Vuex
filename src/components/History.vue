<template>
    <div>
        <h2>History Component</h2>
        <div :class="['flex']">
            <p v-for="(number, index) in history" :key="index" :class="activeIndexes(parseInt(value)).includes(index) && 'boldPara'">
                {{number}} 
            </p>
        </div>
        <!-- {{activeIndexes(value)}} -->
        <input type="number" placeholder="Search By Index" v-model="value">
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
    export default {
        name: 'History',
        data(){
            return{
                value: 0
            } 
        },
        computed:{
            ...mapState(["history"]),
            ...mapGetters(['activeIndexes'])
        }
    }
</script>

<style lang="sass" scoped>
h2
    font-family: cursive
.flex 
    display: flex
    text-align: center
    width: 25rem
    margin: 0 auto
    justify-content: center
    flex-wrap: wrap
    p
        margin: 1rem
.boldPara
    font-family: fantasy
    font-decoration: bold
    text-decoration: none
input
    padding: 0.5rem

</style>