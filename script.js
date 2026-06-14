// STATUS DA LOJA

const storeStatus = document.getElementById("storeStatus");

const openBtn = document.getElementById("openStore");

const closeBtn = document.getElementById("closeStore");


// ABRIR LOJA

openBtn.addEventListener("click", () => {

  storeStatus.classList.remove("closed");

  storeStatus.classList.add("open");

  storeStatus.innerHTML =
  "🟢 Aceitamos Encomendas";

});


// FECHAR LOJA

closeBtn.addEventListener("click", () => {

  storeStatus.classList.remove("open");

  storeStatus.classList.add("closed");

  storeStatus.innerHTML =
  "🟢 Faça o seu Pedido";

});


// PAUSAR PRODUTO

const pauseButtons =
document.querySelectorAll(".pause-btn");

pauseButtons.forEach(button => {

  button.addEventListener("click", () => {

    const product =
    button.parentElement;

    product.classList.toggle("paused");

    if(product.classList.contains("paused")){

      button.innerHTML =
      '<i class="fa-solid fa-eye"></i> Ativar Produto';

    } else {

      button.innerHTML =
      '<i class="fa-solid fa-eye-slash"></i> Pausar Produto';

    }

  });

});