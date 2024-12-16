let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(productName + " has been added to your cart!");
}
function scrollLeft(elementId) {
    var element = document.getElementById(elementId);
    element.scrollLeft -= 100; 
}

function scrollRight(elementId) {
    var element = document.getElementById(elementId);
    element.scrollLeft += 100; 
}



