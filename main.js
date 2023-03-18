function MyLogin(){
  var user = document.getElementById("usuario").value;
  var pass = document.getElementById("contraseña").value;
  
  if (user == "sebastian" && pass == 0) {
    alert("Acceso concedido")
  }else{
    alert("Acceso denegado")
  }
}