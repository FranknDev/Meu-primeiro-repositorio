
function dsenha(){
  document.getElementById("senha").innerL = "*";
}
function enviar(){
  let nome = document.getElementById("nome");
  let senha = document.getElementById("senha");
  let email = document.getElementById("email");
  if(nome.value == "" || nome.value == " " || senha.value == "" || senha.value == " " || email.value == "" || email.value ==" ")
  {
    return alert("Campo Vazio");
  }
  else{
    document.getElementById("dnome").innerHTML = nome.value;
    document.getElementById("dsenha").innerHTML = senha.value;
    document.getElementById("demail").innerHTML = email.value;
    nome.value = "";
    senha.value = "";
    email.value = "";
  }
}