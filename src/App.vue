<template>
  <div id="app">
    <HelloWorld/>
  <formularioreportes/>
    <formulariodatos/>
  </div>
</template>

<script>
import Formulariodatos from './components/Formulariodatos.vue'
import Formularioreportes from './components/Formularioreportes.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Formulariodatos,
    Formularioreportes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
