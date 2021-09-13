import { createApp } from 'vue'
import { createStore} from 'vuex'
import App from './App.vue'
import axios from 'axios'

const store = createStore({
    state(){
        return{
            counter0: 0,
            counter1: 12,
            counter2: 1223,
            counter3: 542,
            history: [0]
        }
    },
    mutations: {
        addToCounter(state, payload){
            state.counter0 += payload;
            state.history.push(state.counter0)
        },
        subFromCounter(state, payload){
            if(payload > 0){
                state.counter0 -= payload;
                state.history.push(state.counter0)
            }else{
                state.counter0 += payload;
                state.history.push(state.counter0)
            }
            console.log("sub From Counter",state.counter0)
        },
        resetCounter(state){
            state.counter0 = 0
            state.history = [0]
        }
    },
    actions:{
        async addRandom(context){
            let data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
            console.log("Before"+ data.data);
            if(data.data < 0){
                data.data *= -1
            }
            console.log("After"+ data.data);
            context.commit('addToCounter', data.data)
        },
        async subRandom(context){
            let data = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
            console.log("Before"+ data.data);
            if(data.data > 0){
                data.data *= -1
            }
            console.log("After"+ data.data);
            context.commit('subFromCounter', data.data)
        }
    },
    getters: {
        activeIndexes: (state) => (payload) => {
            let indexes = []
            state.history.forEach((number, index) => {
                if(number === payload){
                    indexes.push(index)
                }  
            });
            console.log("Inside Getters function");
            return indexes;
        }
    },
})

const app = createApp(App);

app.use(store)

app.mount('#app')
