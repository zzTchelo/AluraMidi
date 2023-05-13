function tocaSom(idElementoAudio) {
  const audio = document.querySelector(idElementoAudio);

  if (audio && audio.localName === "audio") {
    //console.log(audio);
    audio.play();
  } else {
    console.log("Elemento inválido!!!");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
