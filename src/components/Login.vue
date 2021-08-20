<template>
  <div class="Container">
      <form>
           <h3 class="H3Login">Login</h3>
           <span class="SpanCorreo">Correo</span>
      <input class="InputEmail" type="Email">
      <span class="SpanContraseña">Contraseña</span>
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

body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(150, 150, 150, 0.76);
    }
.Container {
    background-color:rgba(195, 247, 242, 0.644);
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 320px;
height: 420px;
border-radius: 50px;
}
.InputEmail {
    margin-bottom: 35px;
    width:200px;
    border-radius: 0px;
    border-right: 0px;
    border-left: 0px;
     border-top: 0px;
  outline: none; 
  background: none;
}
.InputPassword {
    margin-bottom: 35px;
    width: 200px;
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
    padding: 10px;
    border-radius: 12px;
    font-size: 14px;
    }
    .button2:hover {
    background-color: #3b7fbe;
    color: white;
}

.H3Login {
    color: black;
    font-size: 26px;
    margin-bottom: 55px;
}
span {
    font-size: 11px;
    margin-bottom: 15px;
}
form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.SpanCorreo{
    margin-right: 160px;
}

.SpanContraseña{
    margin-right: 140px;
}
</style>