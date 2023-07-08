const gerarPalavra = document.getElementById("gerar");
const guess = document.getElementById("guess");
const adivinhar = document.getElementById("btnAdivinha");
const palavra = document.getElementById("palavra");
const erradas = document.getElementById("erradas")
const larguraFacil = 6;
const larguraMedia = 10;
const botoesDificuldade = document.querySelectorAll(".dificuldade");
const facil = document.getElementById("facil");
const media = document.getElementById("media");
const dificil = document.getElementById("dificil");
const head = document.getElementById("head");
const body = document.getElementById("body");
const leftArm = document.getElementById("left-arm");
const rightArm = document.getElementById("right-arm");
const leftLeg = document.getElementById("left-leg");
const rightLeg = document.getElementById("right-leg");

let vidas = 6;

let letrasErradas = [];

function gerarPalavraFacil() {
  fetch("https://api.dicionario-aberto.net/random")
    .then(response => response.json())
    .then(data => {
      if (data.word.length <= larguraFacil) {
        let palavraAleatoria = data.word;
        for (let i = 0; i < palavraAleatoria.length; i++) {
          let letra = palavraAleatoria[i].toUpperCase();
          let span = document.createElement('span');
          span.textContent = letra;
          span.style.userSelect = "none";
          palavra.appendChild(span);
        }
        let linha = document.createElement('hr');
        linha.style.width = '100%';
        linha.style.border = 'none';
        linha.style.borderTop = '2px solid #000'; 
        palavra.appendChild(linha);

        let totalLetras = document.createElement('i');
        totalLetras.style.fontSize = '1.3rem';
        totalLetras.style.color = 'black';
        totalLetras.textContent = palavraAleatoria.length;
        palavra.appendChild(totalLetras);
      } else {
        gerarPalavraFacil();
      }
    })
    .catch(error => {
      console.log("Ocorreu um erro ao obter a palavra:", error);
    });
}

function gerarPalavraMedia() {
  fetch("https://api.dicionario-aberto.net/random")
    .then(response => response.json())
    .then(data => {
      if (data.word.length > larguraFacil && data.word.length <= larguraMedia) {
        let palavraAleatoria = data.word;
        for (let i = 0; i < palavraAleatoria.length; i++) {
          let letra = palavraAleatoria[i].toUpperCase();
          let span = document.createElement('span');
          span.textContent = letra;
          span.style.userSelect = "none";
          palavra.appendChild(span);
        }
        let linha = document.createElement('hr');
        linha.style.width = '100%';
        linha.style.border = 'none';
        linha.style.borderTop = '2px solid #000'; 
        palavra.appendChild(linha);

        let totalLetras = document.createElement('i');
        totalLetras.style.fontSize = '1.3rem';
        totalLetras.style.color = 'black';
        totalLetras.textContent = palavraAleatoria.length;
        palavra.appendChild(totalLetras);
      } else {
        gerarPalavraMedia();
      }
    })
    .catch(error => {
      console.log("Ocorreu um erro ao obter a palavra:", error);
    });
}

function gerarPalavraDificil() {
  fetch("https://api.dicionario-aberto.net/random")
    .then(response => response.json())
    .then(data => {
      if (data.word.length > larguraMedia) {
        let palavraAleatoria = data.word;
        for (let i = 0; i < palavraAleatoria.length; i++) {
          let letra = palavraAleatoria[i].toUpperCase();
          let span = document.createElement('span');
          span.textContent = letra;
          
          palavra.appendChild(span);
        }
        let linha = document.createElement('hr');
        linha.style.width = '100%';
        linha.style.border = 'none';
        linha.style.borderTop = '2px solid #000'; 
        palavra.appendChild(linha);

        let totalLetras = document.createElement('i');
        totalLetras.style.fontSize = '1.3rem';
        totalLetras.style.color = 'black';
        totalLetras.textContent = palavraAleatoria.length;
        palavra.appendChild(totalLetras);
      } else {
        gerarPalavraDificil();
      }
    })
    .catch(error => {
      console.log("Ocorreu um erro ao obter a palavra:", error);
    });
}

// selecionar dificuldade
botoesDificuldade.forEach(botao => {
  botao.addEventListener("click", () => {
    botoesDificuldade.forEach(botao => {
      botao.classList.remove("active");
    });

    botao.classList.add("active");
  });
});

// gerar palavra
let jogoIniciado = false;
gerarPalavra.addEventListener("click", () => {
  if (!jogoIniciado) {
    if (facil.classList.contains("active")) {
      gerarPalavraFacil();
    } else if (media.classList.contains("active")) {
      gerarPalavraMedia();
    } else if (dificil.classList.contains("active")) {
      gerarPalavraDificil();
    }
    jogoIniciado = true;
  } else {
    alert("O jogo já foi iniciado. Reinicie o jogo para gerar uma nova palavra.");
  }
});

// adivinhar letra/palavra
adivinhar.addEventListener('click', function(){
  let letrasPalavra = palavra.querySelectorAll("span");
  let chute = guess.value.toUpperCase();
  let palavraCompleta = "";

  for (let i = 0; i < letrasPalavra.length; i++) {
    palavraCompleta += letrasPalavra[i].textContent.toUpperCase();
  }

  if (!/^[A-ZÇa-zç]+$/.test(chute)) {
    alert("Por favor, insira apenas letras!");
    guess.value = "";
    return;
  }

  if (chute.length === 1) {
    // Adivinhar letra
    let encontrou = false;

    for (let i = 0; i < letrasPalavra.length; i++) {
      let letraPalavra = letrasPalavra[i].textContent.toUpperCase();

      if (letraPalavra === chute || letraPalavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() === chute) {
        letrasPalavra[i].style.color = "black";
        encontrou = true;
      }
    }

    if(letrasErradas.includes(chute)){
      alert("A letra "+ chute +" já foi testada");
      encontrou = true;
    }

    if (!encontrou) {
      letrasErradas.push(chute);
      let spanErrada = document.createElement("span");
      erradas.appendChild(spanErrada);
      spanErrada.textContent = chute;
      spanErrada.textContent += "-";
      guess.value = "";
      vidas--;

      if (vidas === 5) {
        head.style.display = "block";
      } else if(vidas === 4){
        body.style.display = "block";
      } else if(vidas === 3){
        leftLeg.style.display = "block";
      } else if(vidas === 2){
        rightLeg.style.display = "block";
      } else if(vidas === 1){
        leftArm.style.display = "block";
      } else if(vidas === 0){
        rightArm.style.display = "block";
      }
    }

    if (vidas === 0) {
      alert("Você perdeu! A palavra era " + palavraCompleta);
      reiniciarJogo();
    }
  } else {
    // Adivinhar palavra
    if (palavraCompleta === chute || palavraCompleta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() === chute) {
      for (let i = 0; i < letrasPalavra.length; i++) {
        letrasPalavra[i].style.color = "black";
      }
      alert("Parabéns, você ganhou!");
      reiniciarJogo();
    } else {
      vidas = 0;
      alert("Você errou! A palavra era " + palavraCompleta);
      head.style.display = "block";
      body.style.display = "block";
      leftArm.style.display = "block";
      rightArm.style.display = "block";
      leftLeg.style.display = "block";
      rightLeg.style.display = "block";
      setTimeout(function() {
        reiniciarJogo();
      }, 500);
    }
  }
  guess.value = "";
});



//reiniciar o jogo
function reiniciarJogo() {
  if (confirm("Deseja iniciar um novo jogo?")) {
    palavra.innerHTML = "";
    erradas.innerHTML = "";
    vidas = 6;
    letrasErradas = [];

    head.style.display = "none";
    body.style.display = "none";
    leftArm.style.display = "none";
    rightArm.style.display = "none";
    leftLeg.style.display = "none";
    rightLeg.style.display = "none";

    jogoIniciado = false;
  }
}