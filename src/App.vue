<template>
  <div>
    <login />
    <!--     <HelloWorld />
 -->
 <!--    <div class="containerMain">
      <formulariodatos />
      <consultadereporte />
    </div>
    <div class="tableInfo">
      <formularioreporte />
    </div> -->
  </div>
</template>

<script>
import utilsApi from "@/api/utils";

//import HelloWorld from "@/components/HelloWorld.vue";
/* import Consultadereporte from "@/components/ConsultaReporte.vue";
import Formularioreporte from "./components/Formularioreporte.vue";
import Formulariodatos from './components/Formulariodatos.vue'; */
import Login from './components/Login.vue';
export default {
  name: "App",
  created() {
    utilsApi.test({ "doc": 123, "typedoc": "CC", "fechaE": "01/12/2017" });
    
  },
  components: {
    // HelloWorld,
    /* Consultadereporte,
    Formularioreporte,
    Formulariodatos, */
    Login
  },
};
</script>

<style>
.containerMain {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 40px;
}
.tableInfo {
  display: flex;
  justify-content: center;
}
</style>
