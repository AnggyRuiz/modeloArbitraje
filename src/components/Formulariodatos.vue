<template>
  <div class="contenedor">
      <form class="formulario">
<h3>Generar reporte</h3>
<p>¡Recuerda! debes contar con la autorización del titular antes de realizar la consulta en la plataforma.</p>
<textarea placeholder="Documento" wrap=""></textarea>
<select>
    <option value="CC">CC</option>
        <option value="NIT">NIT</option>
            <option value="CE">CE</option>
                <option value="PEP">PEP</option>
                    <option value="Nombre">PASAPORTE</option>
                        <option value="Pasaporte">NOMBRE</option>
</select>

<input  type="text"  placeholder="Fecha de expedición (dd/mm/yyyy)">
<button>Enviar</button>
<h4 class="tituloreporte">Enviar reporte via email si contiene hallazgo alto</h4>
<div class="Boton">
    <h4>No</h4>
<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>
<h4>Si</h4>
</div>

      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
height: 100vh;
width: 100%;
}

.contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
  border: 1px solid black;
    width: 750px;
    height: 450px;

}


h3{
    display: flex;
    align-self: flex-start;
 font-family: "Poppins";
 font-size: 21px;
}
p{
    display: inline-block;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    border-radius: 10px;
    padding: 10px;
}
.formulario { 

    height: 400px;
    width: 600px;
   
}
textarea {

    width: 570px;
    border-radius: 10px;
height: 40px;

}
select {
    width: 200px;
    padding: 10px;
    border-radius: 10px;

}
input {
width: 350px;
    padding: 10px;
    border-radius: 10px;
}

button {
    display: flex;
    align-self: flex-start;
    margin: 4px;
    padding: 12px;
    border-radius: 10px;
    background-color: darkturquoise;
}
.tituloreporte {
    display: flex;
    justify-self: flex-start;
}
   
.opciones {
    display: flex;
    justify-content: flex-start;
    width: 50px;
}
.switch {
    border: 1px solid black;
  width: 60px;
  height: 34px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 25px;
  width: 30px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.Boton{
    display: flex;
    justify-content: center;
    flex-direction: row ;
    align-items: center;

    width: 150px;
    justify-content: space-evenly;
    height: 40px;

}


</style>