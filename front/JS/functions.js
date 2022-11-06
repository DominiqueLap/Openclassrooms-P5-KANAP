//on enregistre le panier dans le local storage

function saveCartToLocalStorage(panier) {
  localStorage.setItem("panier", JSON.stringify(panier));
}

// on récupére le  panier du LS

// function getCartFromLocalStorage() {
//   let panier = localStorage.getItem("panier");
//   if (panier == null) {
//     return [];
//   } else {
//     return JSON.parse(panier);
//   }

// on ajoute des produits au panier
//}
function addCart(product) {
  panier = getCartFromLocalStorage();
  let checkProduct = panier.find(
    (p) => p.id == product.id && p.color == product.color
  );
  if (checkProduct != undefined) {
    checkProduct.quantity = checkProduct.quantity + product.quantity;
  } else {
    panier.push(product);
  }

  saveCartToLocalStorage(panier);
}


