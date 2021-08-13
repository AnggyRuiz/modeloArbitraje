<template>
  <div class="componente2">
      <h4>Reporte Solicitado</h4>
  <h4>La consulta sobre Jeison Daniel Calle ha finalizado.</h4>
  <input class="inputt">
  <h4 class="color">Tiempo de consulta:</h4>
  <div class="botones">
      <button>Ver reporte</button>
      <button>Ver reporte tradicional</button>
  </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
.componente2{
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    align-items: flex-start;
    width: 450px;
    height: 290px;
}
.color {
    opacity: 80%;
}
.inputt {
    width: 300px;
    height: 5px;
    background-color: green;
}
.botones {
    display: flex;
}

</style>