let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        brownie: 25
        sugar: 15
        pecan: 20
        M&M's: 30
    */
   
   console.log('User is adding a cookie to the cart: ' , cookie) 

   itemCount = itemCount + 1
   console.log(itemCount)
   //add 1 to the itemCount variable
   //add the right price to the currentPrice variable
   if (cookie == "brownie") {
    currentPrice = currentPrice + 20
} else if (cookie == "sugar") {
    currentPrice = currentPrice + 30
} else if ( cookie == "pecan") {
    currentPrice = currentPrice + 35
} else if (cookie = "M&M's") {
    currentPrice = currentPrice + 25
}


   console.log(currentPrice)
}

function checkout() {
    console.log('User is checking out cookies.')
    //Let your customer know how much they are buying and the total price
    window.alert(`Item Count: ${itemCount} Total Cost: ${currentPrice}`)
}