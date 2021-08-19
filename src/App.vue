<template>
  <div id="app">
    <HelloWorld/>
  <formularioreportes/>
    <formulariodatos/>
    <consultadereporte/>
  
  </div>
</template>

<script>
import Formularioreportes from './components/Formularioreportes.vue'
import Formulariodatos from './components/Formulariodatos.vue'
import HelloWorld from './components/HelloWorld.vue'
import Consultadereporte from './components/consultadereporte.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
     Formularioreportes,
    Formulariodatos,
    Consultadereporte,
   
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
