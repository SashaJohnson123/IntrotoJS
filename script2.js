function addOrange() {
    addItemToCart("Orange", 1.60)
}

function addMango() {
    addItemToCart("Mango", 2.30)
}

function addStrawberry() {
    addItemToCart("Strawberry", 1.40)
}

function addPassionfruit() {
    addItemToCart("Passionfruit")
}

function addPeach() {
    addItemToCart("Peach")
}

function addItemToCart(Item, Price) {
    let cart = document.getElementById("ShoppingCart")
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`${Item} $${Price}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    cart.appendChild(node);
}
