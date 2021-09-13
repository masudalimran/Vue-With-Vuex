<template>
    <div>
        <h1>Vue Counter</h1>
        <h1 :class="['counter']"> {{ counter0 }} </h1>
        <button @click="subFromCounter(value)">-</button>
        <input type="number" v-model="value">
        <button @click="addToCounter(value)">+</button>
        <div>
            <button @click="addRandom" :class="['btn1']">Add Random Number</button>
            <button @click="subRandom" :class="['btn2']">Add Random Number</button>
        </div>
        <div>
            <button @click="resetCounter" :class="['btn3']">Reset</button>
        </div>
        <History />
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex'
import History from './History.vue'
    export default {
        name: 'Counter',
        components:{
            History
        },
        data(){
            return{
                value: 1,
            }
        },
        computed:{
            ...mapState(["counter0","counter1","counter2","counter3"])
        },
        methods: {
            ...mapMutations(["addToCounter", "subFromCounter","resetCounter"]),
            ...mapActions(["addRandom", "subRandom"])
        },
    }
</script>

<style lang="sass" scoped>
button
    border-radius: 100%
    border: 2px solid white
    width: 2rem
    height: 2rem
    font-weight: 700
    cursor: pointer
    &:hover
        border: 2px solid black    

.counter
    font-size: 5rem

.btn1
    border-radius: 0.5rem
    background: lightblue
    width: auto
    margin: 1rem 1rem
    color: black
    cursor: pointer

.btn2
    border-radius: 0.5rem
    background: orange
    width: auto
    margin-top: 1rem
    color: white
    cursor: pointer
.btn3
    border-radius: 0.5rem
    background: red
    width: auto
    margin-top: 1rem
    color: white
    cursor: pointer
    
</style>