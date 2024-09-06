const defaultColors = ["red","green"];
const userFavoriteColors = ["orange","yellow"];

let arryTogether = defaultColors.concat(userFavoriteColors)
console.log(arryTogether);

let result = [...defaultColors,userFavoriteColors]


function validateShoppingList(...items){
    if(items.indexOf("milk") < 0){
        return ["milk", ...items]
    }
  return items;
}
console.log(validateShoppingList("oranges","bread"));

