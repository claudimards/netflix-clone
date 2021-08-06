// controles para botão de ver mais informações
const buttonMaisInformacoes = document.querySelectorAll(
  '[data-action="toggle-infos"]'
);
const maisInfosWrapper = document.querySelector('[data-label="info-wrapper"]');
const trailerIframe = document.querySelector('[data-label="trailer"]');
const sinopse = document.querySelectorAll('[data-label="sinopse"]');
const sinopseContainer = document.querySelector(
  '[data-label="sinopse-container"]'
);
const filmeUrl = document.querySelectorAll('[data-label="filme-url"]');
const body = document.querySelector("body");

if (maisInfosWrapper) {
  buttonMaisInformacoes.forEach((item, index) => {
    item.addEventListener("click", () => {
      sinopseContainer.innerHTML = "";
      sinopseContainer.innerHTML = sinopse[index].innerHTML;

      trailerIframe.src = "";
      trailerIframe.src = filmeUrl[index].innerHTML + "&autoplay=1";

      maisInfosWrapper.classList.add("active");
      body.classList.add("overflow-hidden");
    });
  });
}

// constroles para botão de assistir
const buttonAssistir = document.querySelectorAll('[data-action="assistir"]');
const playerWrapper = document.querySelector('[data-label="assitir-filme"]');
const assistirIframe = document.querySelector('[data-label="filme"]');

if (playerWrapper) {
  buttonAssistir.forEach((item, index) => {
    item.addEventListener("click", () => {
      assistirIframe.src = "";
      assistirIframe.src = filmeUrl[index].innerHTML + "&autoplay=1";

      playerWrapper.classList.add("active");
      body.classList.add("overflow-hidden");
    });
  });
}

// controle para fechar players
const closeInfos = document.querySelectorAll('[data-action="close-player"]');
closeInfos.forEach((item) => {
  item.addEventListener("click", () => {
    sinopseContainer.innerHTML = "";
    trailerIframe.src = "";
    assistirIframe.src = "";

    maisInfosWrapper.classList.remove("active");
    playerWrapper.classList.remove("active");
    body.classList.remove("overflow-hidden");
  });
});
