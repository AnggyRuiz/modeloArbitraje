<template>
  <div>
   <componentemama/>
  </div>
  
</template>

<script>
import utilsApi from "@/api/utils";
import Componentemama from './components/Componentemama.vue';


export default {
  name: "App",
  created() {
    utilsApi.test({ doc: 123, typedoc: "CC", fechaE: "01/12/2017" });
  },
  components: {
    Componentemama
  }
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
