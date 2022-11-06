//on récupère la liste des produits du backend grâce a la méthode FETCH(requête HTTP GET par défaut),

fetch("http://localhost:3000/api/products")
  .then((promesse) => promesse.json())
  .then((reponse) => {
    console.log(reponse);
    for (let i of reponse) {
      let product = new Product(i);
      console.log(product);
      let dynamicTemplate = document.getElementById("items");
      dynamicTemplate.innerHTML += `    <a href="./product.html?id=${product._id}">
                                          <article>
                                            <img src="${product.imageUrl}" alt="${product.altTxt}">
                                            <h3 class="productName">${product.name}</h3>
                                            <p class="productDescription">${product.description}</p>
                                          </article>
                                        </a>`;
    }
  });


