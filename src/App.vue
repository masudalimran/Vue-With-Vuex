<template>
  <div>
    <Component1 />
  </div>
</template>

<script>
import Component1 from "./components/Component1.vue";
export default {
  name: "App",
  components: {
    Component1,
  },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
body
  background: mediumspringgreen
p
  text-decoration: underline
input
    padding: .65rem
    margin: 0 0.5rem
    text-align: center
</style>
