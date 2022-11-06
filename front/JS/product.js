//The search property returns the querystring part of a URL, including the question mark (?) https://www.w3schools.com/jsref/prop_loc_search.asp
// The get() method of the URLSearchParams interface returns the first value associated to the given search parameter.
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get

let productId = new URLSearchParams(document.location.search);
let id = productId.get("id");
console.log(id);

fetch(`http://localhost:3000/api/products/${id}`)
  .then((data) => data.json())
  .then((dataProduct) => {
    console.log(dataProduct);
    document.querySelector(
      ".item__img"
    ).innerHTML = `<img src="${dataProduct.imageUrl}" alt="${dataProduct.altTxt}">`;
    document.getElementById("title").innerHTML = `${dataProduct.name}`;
    document.getElementById("price").innerHTML = `${dataProduct.price}`;
    document.getElementById(
      "description"
    ).innerHTML = `${dataProduct.description}`;
    for (color of dataProduct.colors) {
      let option = document.createElement("option");
      option.innerHTML = color;
      document.getElementById("colors").appendChild(option);
      let colorValue = color.toLowerCase();
      option.setAttribute("value", colorValue);
    }
  });

let kanapSelection = document.getElementById("addToCart");
kanapSelection.addEventListener("click", () => {
  let kanapPanier = {
    id: id,
    quantity: Number(quantity.value),
    color: colors.value,
  };
  checkSelection(kanapPanier);
});

// on verifie que les couleurs et quantités sont correctement renseignées

function checkSelection(kanapPanier) {
  if (colors.value == "") {
    alert("Veuillez choisir une couleur");
  } else if (quantity.value > 0 && quantity.value <= 100) {
    addCart(kanapPanier);
  } else alert("Veuillez choisir une quantité comprise entre 1 et 100");
}
