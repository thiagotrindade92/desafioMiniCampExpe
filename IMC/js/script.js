function start() {
  const botaoCalcula = document.querySelector("#butto-calcule-imc");
  botaoCalcula.addEventListener("click", handleButtonClick);

  let inputPeso = document.querySelector("#inputPeso");
  let inputAltura = document.querySelector("#inputPeso");

  inputPeso.addEventListener("input", handleButtonClick);
  inputAltura.addEventListener("input", handleButtonClick);

  handleButtonClick();
}

function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function handleButtonClick() {
  const inputPeso = document.querySelector("#inputPeso");
  const  inputAltura = document.querySelector("#inputAltura");
  const  imcResult = document.querySelector("#imcResult");
  const  imcResultGrau = document.querySelector("#imcResultGrau");
  
  let  peso = inputPeso.value;
  let  altura = inputAltura.value;
  
  const  imc = calcularImc(peso, altura);
  const  formatarImc = imc.toFixed(2);
  //const grausImcs = imc;
  
  
  imcResult.textContent = formatarImc;
  //imcResultGrau.textContent = exibirGraus(imc);

  if (imc <= 15) {
    imcResultGrau.textContent = "IMC inválido, não está de acordo com a tabela da OMS"    
  }
  if (imc >= 16) {
      if (imc <= 18.4) {
        imcResultGrau.textContent = "Abaixo ou muito abaixo do peso";
      }
          
  } 
  if (imc >= 18.5) {
      if (imc <= 24.9) {
        imcResultGrau.textContent =  "Peso normal";   
      }
  } 
  if (imc >= 25){
        imcResultGrau.textContent = "Você está acima do peso";
  }
  if(imc >= 30) {
      if (imc <= 34.9) {
        imcResultGrau.textContent = "Obesidade grau I"
      
    }
  }
  if (imc >= 35) {
      if (imc <= 39) {
        imcResultGrau.textContent = "Obesidade grau II"
      }
  } 
  if (imc == 40) {
        imcResultGrau.textContent = "Obesidade grau III"
  }
  if (imc > 45) {
    imcResultGrau.textContent = "IMC inválido, não está de acordo com a tabela da OMS" 
  }

  /* 
  function exibirGraus(exibir) {
    let arrayDeImcs = new Array(
      grauMuitoAbaixo = 16, 16.90,
      grauAbaixo = 17, 18.4,
      grauNormal = 18, 24.9,
      grauAcimaPeso = 25, 29.90,
      obesidadeGrau1 = 30, 34.9,
      obesidadeGrau2 = 35, 39,
      obesidadeGrau3 = 40
    );
        
    if (grausImcs == arrayDeImcs[0] || grausImcs == arrayDeImcs[1, 1]){
      //imcResultGrau.textContent = "Muito abaixo do peso";
      return ("Muito abaixo do peso.");
    } else if(grausImcs == arrayDeImcs[2] || grausImcs == arrayDeImcs[3, 3]) {
      return ("Abaixo do peso");
    } else if(grausImcs == arrayDeImcs[4] || grausImcs == arrayDeImcs[5, 5]) {
      return ("Peso normal"); 
    } else if(grausImcs == arrayDeImcs[6] || grausImcs == arrayDeImcs[7, 7]) { 
      return ("Acima do peso");
    } else if(grausImcs == arrayDeImcs[8] || grausImcs == arrayDeImcs[9, 9]) { 
      return ("Obesidade grau I");
    } else if(grausImcs == arrayDeImcs[10] || grausImcs == arrayDeImcs[10, 10]) { 
      return ("Obeidade grau II");
    } else if(grausImcs >= arrayDeImcs[11]) {
      return ("Obesidade grau III");
    } else if(grausImcs <= 15) {
      return ("IMC inválido ou não se encaixa no padrão da OMS");
    }
  
  }
  */
}

start();
