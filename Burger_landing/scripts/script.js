document.getElementById("main-action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

//meniu eilučių gražus perėjimas
let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}
let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

//orderio funkcionalas
let burger = document.getElementById("burger");
let nameElement = document.getElementById("vardas");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
  let hasError = false;
  [burger, nameElement, phone].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else {
      item.parentElement.style.background = "";
    }
  });
  if (!hasError) {
    [burger, nameElement, phone].forEach((item) => {
      item.value = "";
    });
    alert("Ačiū už užsakymą, mūsų vadybininkas su Jumis susisieks");
  }
};
//valiutų keitimas
let prices = document.getElementsByClassName("products-item-price");

document.getElementById("change-currency").onclick = function (e) {
  let currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coefficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 80;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    let originalPrice = parseFloat(prices[i].getAttribute("data-base-price"));
    prices[i].innerText =
      (originalPrice * coefficient).toFixed(1) + " " + newCurrency;
  }
};
