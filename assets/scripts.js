
const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array
        this.items.push(cookie)

        //add the price (number) to the currentPrice properties
        this.currentPrice= this.currentPrice + price 


    },
    clear: function() {
        //reset the currentPrice and items properties
        this.currentPrice= 0
        this.items= []
    }
}

function addToCart(cookie) {
    /* 
        PRICES
        brownie: 20
        sugar: 30
        pecan: 35
        M&M's: 25
    */
   
   console.log('User is adding a cookie to the cart: ' , cookie) 

   itemCount = itemCount + 1
   console.log(itemCount)

   document.getElementById("cartItems").innerHTML= itemCount

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

   document.querySelector(".hoverText").innerHTML = currentPrice
   console.log(cart)
   document.getElementById("cartItems").innerHTML= cart.currentPrice
}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know what they are purchasing and what the price is

    window.alert(`Item Count: ${cart.items.length} Total Cost: ${cart.currentPrice}`)
    prompt(`What is your Name and Address so we can ship your items to you?`)
    cart.clear()
    currentPrice = 0
    itemCount = 0

    document.querySelector(".hoverText").innerHTML = cart.currentPrice
    console.log(cart)
    document.getElementById("cartItems").innerHTML= cart.items.length

}

function darkMode() {
    document.querySelector("body").style.color = "white"
    document.querySelector("body").style.backgroundColor = "black"

} 
