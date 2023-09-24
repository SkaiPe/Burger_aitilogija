document.getElementById("main-action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};
let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementsById("data-link")
      .scrollIntoView({ behavior: "smooth" });
  };
}
let buttons = getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}
let burger = document.getElementById("burger");
let name = document.getElementById("vardas");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
  let hasError = false;
  [burger, vardas, phone].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else {
      item.parentElement.style.background = "";
    }
  });
  if (!hasError) {
    [burger, vardas, phone].forEach((item) => {
      item.value = "";
    });
    alert("Ačiū už užsakymą, mūsų vadybininkas su Jumis susisieks");
  }
};

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function () {
  let currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coeficient = 1;
  if (currentCurrency === "$") {
    newCurrency = "₽";
    coeficient = 80;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coeficient = 3;
  }
  e.target.innerText = newCurrency;
  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute() * coeficient).toFixed(1) + " " + newCurrency;
  }
};
