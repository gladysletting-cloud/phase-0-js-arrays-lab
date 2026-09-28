// Write your code here
const products = ["Laptop", "Phones", "Headphones", "Monitor"]

function logFirstProduct(){
  console.log(products[0]);
}
function addProduct(name){
  products.push(name);
}
function updateProductName(index,newName){
  products[index] = newName
  return products;
}
function removeLastProduct() {
  products.pop();
  return products;
}

module.exports ={
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
}
