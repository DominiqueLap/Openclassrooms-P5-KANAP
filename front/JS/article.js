// La méthode Object.assign() est utilisée afin de copier les valeurs de toutes les propriétés directes (non héritées) d'un objet qui sont énumérables sur un autre objet cible. Cette méthode renvoie l'objet cible.

//------------- class avec Object.assign()

// class Article {
//   constructor(jsonProduct) {
//     jsonProduct && Object.assign(this,jsonProduct);
//   }
// }

//------------- function avec Object.assign()

// function Article(jsonProduct) {
//   jsonProduct && Object.assign(this,jsonProduct);
// }

// class definition litterale

class Product {
  constructor(jsonProduct) {
    this._id = jsonProduct._id;
    this.imageUrl = jsonProduct.imageUrl;
    this.name = jsonProduct.name;
    this.description = jsonProduct.description;
    this.altTxt = jsonProduct.altTxt;
  }
}
