<template>
  <div>
    <!--     <HelloWorld />
 -->
    <div class="containerMain">
      <formulariodatos />
      <consultadereporte />
    </div>
    <div class="tableInfo">
      <formularioreporte />
    </div>
  </div>
</template>

<script>
import utilsApi from "@/api/utils";

//import HelloWorld from "@/components/HelloWorld.vue";
import Consultadereporte from "@/components/ConsultaReporte.vue";
import Formulariodatos from "@/components/FormularioDatos.vue";
import Formularioreporte from "./components/Formularioreporte.vue";
export default {
  name: "App",
  created() {
    utilsApi.test();
  },
  components: {
    // HelloWorld,
    Formulariodatos,
    Consultadereporte,
    Formularioreporte,
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
