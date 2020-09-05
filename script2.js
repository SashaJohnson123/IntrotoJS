// function addOrange(name, price) {
//     addItemToCart("Orange", 1.60)
//     console.log("Orange", 1.60)
// }

// // function addMango() {
//     addItemToCart("Mango", 2.30)
//     console.log("Mango", 2.30)
// }

// function addStrawberry() {
//     addItemToCart("Strawberry", 1.40)
//     console.log("Strawberry", 1.40)
// }

// function addPassionfruit() {
//     addItemToCart("Passionfruit", 3.40)
//     console.log("Passionfruit", 3.40)
// }

// function addPeach() {
//     addItemToCart("Peach", 1.70)
//     console.log("Peach", 1.70)
// }

function addItemToCart(Item, Price) {
    let cart = document.getElementById("ShoppingCart");
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`${Item} $${Price}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    cart.appendChild(node);
}
