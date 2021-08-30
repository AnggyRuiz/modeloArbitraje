<template>
  <div class="ContainerMain">
    <div class="ContainerLogin">
       <login /> 
    </div>
    <div class="ContainerDatosyReporte">
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

import Consultadereporte from "@/components/ConsultaReporte.vue";
import Formularioreporte from "./components/Formularioreporte.vue";
import Formulariodatos from "./components/Formulariodatos.vue";
import Login from "./components/Login.vue";
export default {
  name: "App",
  created() {
    utilsApi.test({ doc: 123, typedoc: "CC", fechaE: "01/12/2017" });
  },
  components: {
    Consultadereporte,
    Formularioreporte,
    Formulariodatos,
    Login,
  },
};
</script>

<style>
.ContainerMain {
  min-width: 590px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ContainerDatosyReporte {
  display: flex;
  justify-content: space-between;
}
.tableInfo {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
