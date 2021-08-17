<template>
  <div class="container">
    <h2>Reporte Solicitado</h2>
    <h4>La consulta sobre Jeison Daniel Calle ha finalizado.</h4>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
  
    <div class="botones">
      <button type="button" class="btn btn-primary formBtn">Ver Reporte</button>
      <button type="button" class="btn btn-outline-primary">
        Ver reporte tradicional
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
}
.color {
  opacity: 80%;
}

.botones {
    margin-top: 3%;
  display: flex;
}
.formBtn {
  margin-right: 2%;
}
.progress {
    margin-top: 3%;
  width: 80%;
}
</style>