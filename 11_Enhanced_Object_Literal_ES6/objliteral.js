console.log("running");

function createBookShop(inventory){
    return {
        inventory:inventory,
        inventoryValue:function(){
           return this.inventory.reduce((total,book)=>total + book.price,0);
        },
        priceForTitle:function(title){
return this.inventory.find(book=>book.title === title).price;
        }
    };
}

const inventory = [
    {title:"Grammer Book",price:10},
    {title:"Book Book",price:15}
]
const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Book Book"));



