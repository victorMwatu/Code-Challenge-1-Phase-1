//function calculateChaiIngredients that prompts user for input
//prompts user for number of cups of chai and prints to console the ingredients required
function calculateChaiIngredients() {

    //prompt user for number of cups they want ingredients for 
    const numberOfCups = parseInt((prompt("Karibu!, how many cups of chai would you like to make:")), 10);
    
    //check if number of cups is a valid number and print ingredients if true
    if(!!numberOfCups === true) {
        //calculate ingredients
        let water = 200 * numberOfCups;
        let milk = 50 * numberOfCups;
        let majani = 1 * numberOfCups;
        let sukari = 2 * numberOfCups;

        //print out to console ingredients
        console.log(`

To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${majani} tablespoons
Sugar (Sukari): ${sukari} teaspoons

Enjoy your chai bora!

                     `);
    //if user did not input a number at the prompt at all or in digits
    } else {
        alert("You have not given a number, please make sure your input is a number in digits!");
    }
}
//call the function to initiate execution
calculateChaiIngredients();