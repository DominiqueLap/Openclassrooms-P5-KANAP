// on récupére le  panier du LS

function getCartFromLocalStorage() {
  let panier = localStorage.getItem("panier");
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}

let monPanier = getCartFromLocalStorage();
console.log(monPanier);
console.log(typeof monPanier);

for (let produitPanier of monPanier) {
  console.log(
    "L'id produit est " +
      produitPanier.id +
      ",la couleur est " +
      produitPanier.color +
      " et la quantité est de " +
      produitPanier.quantity
  );
  fetch(`http://localhost:3000/api/products/${produitPanier.id}`)
    .then((promesse) => promesse.json())
    .then((reponse) => {
      console.log(reponse.name);
      console.log(reponse.price);
      document.getElementById("cart__items").innerHTML += ` 
                         <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                        <div class="cart__item__img">
                          <img src="${reponse.imageUrl}"}" alt="${reponse.description}">
                        </div>
                        <div class="cart__item__content">
                        <h2>${reponse.name}</h2>
      
                        <p>${produitPanier.color}</p>
                        <p>${reponse.price} €</p>
                       <div class="cart__item__content__settings">
                       <div class="cart__item__content__settings__quantity">
                         <p>Qté : </p>
                         <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produitPanier.quantity}">
                       </div>
                       <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                        </div>`;
    });
}
