//function to estimate transaction fee of mobile money transfer
function estimateTransctionFee() {
    //declare variables to store transacrion fee and total amount debited
    let transactionFee;
    let totalAmountDebited;

    //prompt user for amount to send and save it in a variable
    const amountToSend = parseInt((prompt("Unatuma Ngapi? (KES):")), 10);

    //calculate transaction fee and output the reciept
    //check if ammountToSend is true in boolean which will indicate that it was a number, the parseInt was successful    
        if( !!amountToSend === true) {
            //calculate transaction fee, I avoided decimals because Im not sure of js behavior
            transactionFee = (amountToSend * 15) / 1000;
            //check limits of transaction fee and add the correct amount
            if(transactionFee < 10) {
                transactionFee = 10;
            }else if (transactionFee > 70){
                transactionFee = 70;
            }
        
            totalAmountDebited = amountToSend + transactionFee;
            //print reciept to console
            console.log(`
                
        Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES ${transactionFee}
        Total amount to be debited: KES ${totalAmountDebited}

        Send Money Securely!
                
                `)

        //if user input was not enterd or not in digits/a number      
        }else {
            alert("You did not enter a number in digits")
        }
}
//call the function to initiate execution
estimateTransctionFee();