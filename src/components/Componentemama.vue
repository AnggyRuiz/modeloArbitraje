<template>
   
<div>
   <div class="container d-flex align-items-center justify-content-center ">
        <div class="row justify-content-between ps-3 ">
  <reporte-solicitado/>
      <tabla/>
      <generate-report/>
</div>
</div>
</div>
</template>

<script>
import GenerateReport from './GenerateReport.vue'
import ReporteSolicitado from './ReporteSolicitado.vue'
import Tabla from './Tabla.vue'
export default {
  components: { ReporteSolicitado, Tabla, GenerateReport },
}
</script>

<style>

</style>