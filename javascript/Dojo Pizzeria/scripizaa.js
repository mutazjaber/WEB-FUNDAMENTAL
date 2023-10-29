

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "pesto", ["mozzarella", "parmesan"], ["chicken", "spinach", "tomatoes"]);
var pizza4 = pizzaOven("stuffed crust", "barbecue", ["cheddar", "mozzarella"], ["chicken", "bacon", "red onions"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);







function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    var sauceTypes = ["traditional", "marinara", "pesto", "barbecue"];
    var cheeses = ["mozzarella", "feta", "parmesan", "cheddar"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "bacon", "red onions", "spinach", "tomatoes"];

    var randomPizza = pizzaOven(
        crustTypes[Math.floor(Math.random() * crustTypes.length)],
        sauceTypes[Math.floor(Math.random() * sauceTypes.length)],
        [cheeses[Math.floor(Math.random() * cheeses.length)]],
        [toppings[Math.floor(Math.random() * toppings.length)]]
    );

    return randomPizza;
}

var randomPizza1 = randomPizza();
var randomPizza2 = randomPizza();

console.log(randomPizza1);
console.log(randomPizza2);


