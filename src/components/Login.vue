<template>
  <div class="Container">
      <form>
           <h3 class="H3Login">Login</h3>
           <span>Correo</span>
      <input class="InputEmail" type="Email">
      <span>Contraseña</span>
      <input class="InputPassword" type="Password">
      <button class="button2">Ingresar</button>
  </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Container {
    background-color:rgb(217, 250, 245);
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 400px;
border-radius: 50px;
}
.InputEmail {
    padding: 10px;
    margin-bottom: 16px;
    width: 180px;
    border-radius: 0px;
    border-right: 0px;
    border-left: 0px;
     border-top: 0px;
  outline: none; 
  background: none;
}
.InputPassword {
    width: 180px;
    margin-bottom: 25px;
     border-radius: 0px;
    border-right: 0px;
    border-left: 0px;
    border-top: 0px;
  outline: none;
  background: none;

}
.button2 {
    background-color: white;
    color: black;
    border: 2px solid rgb(92, 185, 221);
    padding: 12px;
    margin-left: 60px;
    }
    .button2:hover {
    background-color: #3b7fbe;
    color: white;
}

.H3Login {
    color: black;
    font-size: 26px;
    margin-left: 70px;
    margin-bottom: 55px;
}
span {
    display: flex;
    font-size: 12px;
}
</style>