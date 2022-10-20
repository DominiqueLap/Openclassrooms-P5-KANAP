// let params = new URLSearchParams(document.location.search);
// console.log(params);

// let id = params.get("id");
// console.log(id);

// fetch(`http://localhost:3000/api/products/${id}`)
//   .then((response) => response.json())

//   .then((data) => {
//     console.log(data);

//     document.querySelector(
//       ".item__img"
//     ).innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}" />`;
//     document.getElementById("price").innerHTML = data.price;
//     document.getElementById("title").innerHTML = data.name;
//     document.getElementById("description").innerHTML = data.description;
//     let colors = data.colors;
//     console.table(colors);
//     for (let color of colors) {
//       console.log(color);

//       let option = document.createElement("option");
//       option.innerHTML = `${color}`;
//       document.getElementById("colors").appendChild(option);
//     }
//   });

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
    }
  });
