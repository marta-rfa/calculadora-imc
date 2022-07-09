function calcularImc(){
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseInt((document.getElementById("altura").value))/100
    
    let imc = (peso / (altura*altura)).toFixed(2)
   
    if(imc > 0 && imc <= 18.5){
      document.getElementById("resultado-imc").innerHTML = "Seu IMC é: " + imc;
      document.getElementById("resultado-tipo").innerHTML = "\n MAGREZA";
      } else if(imc > 18.5 && imc <= 24.9){
        document.getElementById("resultado-imc").innerHTML = "Seu IMC é: " + imc;
          document.getElementById("resultado-tipo").innerHTML = "\n PESO NORMAL";
      } else if(imc > 24.9 && imc <= 29.9){
        document.getElementById("resultado-imc").innerHTML = "Seu IMC é: " + imc;
          document.getElementById("resultado-tipo").innerHTML = "\n OBESIDADE I";
      } else if(imc >= 30 && imc <= 39.9){
        document.getElementById("resultado-imc").innerHTML = "Seu IMC é: " + imc;
          document.getElementById("resultado-tipo").innerHTML = "\n OBESIDADE II";
      } else if(imc>=40){
        document.getElementById("resultado-imc").innerHTML = "Seu IMC é: " + imc;
          document.getElementById("resultado-tipo").innerHTML = "\n OBESIDADE III";
      } else{
      document.getElementById("resultado-imc").innerHTML = "ALGO ERRADO. PREENCHA OS DADOS CORRETAMENTE";
    }
  }
  
  