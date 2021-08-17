<template>
  <div class="containerForm">
    <form class="form">
      <h2>Generar reporte</h2>
      <p id="alert" style="display: none;">
        ¡Recuerda! debes contar con la autorización del titular antes de
        realizar la consulta en la plataforma.
      </p>
      <div class="contentInput">
        <input
          class="inputDoc"
          type="text"
          placeholder="Ingrese el documento"
        />
      </div>
      <div class="contentInfo">
        <select>
          <option value="CC">CC</option>
          <option value="NIT">NIT</option>
          <option value="CE">CE</option>
          <option value="PEP">PEP</option>
          <option value="Nombre">PASAPORTE</option>
          <option value="Pasaporte">NOMBRE</option>
        </select>

        <input type="date" />
      </div>
     <button type="button" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>

.containerForm {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: white;
}
.btn-primary {
  margin-left: 5%;
  margin-top: 3%;
}
h2 {
  margin-left: 5%;
  margin-bottom: 3%;
  display: flex;
  align-self: flex-start;
  font-family: "Poppins";
  
}
p {
  padding-top: 3%;
  display: inline-block;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border-radius: 10px;
  padding: 10px;
}
.form {
  display: flex;
  flex-direction: column;
  width:90%;
}
.contentInput {
  display: flex;
  justify-content: center;
}
.contentInfo {
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
}
.inputDoc {
  width: 90%;
  padding: 10px;
  height: 45px;
}
select {
  width: 30%;
  padding: 10px;
  border-radius: 10px;
}
input {
  width: 60%;
  padding: 10px;
  border-radius: 10px;
}

button {
  display: flex;
  align-self: flex-start;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 25px;
  width: 30px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.Boton {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  width: 150px;
  justify-content: space-evenly;
  height: 40px;
}
</style>