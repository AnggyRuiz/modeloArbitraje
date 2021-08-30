<template>
   
<div>
        <div class="row justify-content-between ps-4">
  <generar-reporte/>
  <reporte-solicitado/>
</div>
 <tabla/>
</div>
</template>

<script>
import GenerarReporte from './GenerarReporte.vue'
import Tabla from './Tabla.vue'
import ReporteSolicitado from './ReporteSolicitado.vue'

export default {
  components: { ReporteSolicitado, Tabla, GenerarReporte, },
}
</script>

<style>

</style>