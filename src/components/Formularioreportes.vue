<template>

  <div class="contenedor1">
      
<div class="dato">
    <h4>#</h4>
    <h4>Cédula</h4>
    <h4>Nombre</h4>
    <h4>Fecha</h4>
    <h4>Hallazgo</h4>
    <h4>Error</h4>
    <h4>Recargar</h4>
    <h4>PDF</h4>
    <div class="numeros">
  <h4>1</h4>
  <h4>2</h4>
  <h4>3</h4>
  <h4>4</h4>
  <h4>5</h4>
  <h4>6</h4>
  <h4>7</h4>
  <h4>8</h4>
  <h4>9</h4>
</div>
</div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.contenedor1 {
    display: flex;
    border: 1px solid black;
    width: 1200px;
    height: 500px;
}
.dato {
    width: 1200px;
    border: 1px solid black;
    display: flex;
    flex-direction:row ;
    justify-content: space-between;
}
.numeros {
  display: flex;
  flex-direction: column;
 justify-items: flex-start;
}
</style>