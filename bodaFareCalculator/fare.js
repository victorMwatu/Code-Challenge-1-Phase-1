//function to calculate boda fare
function calculateBodafare() {
    //declare variables to store baseFare and chargePerKm
    let baseFare = 50;
    let chargePerKm = 15;

    //ask user to give distance to travel
    const distanceInKm = parseInt((prompt("Enter the distance of your trip in digits:")), 10);

    //calculate fare if distance given is a valid number in digits, and print fare
    if( !!distanceInKm === true ) {
        //calculate total fare and store it in a variable
        let fare = distanceInKm * chargePerKm;
        let totalFare = baseFare + fare;

        //print to console the reciept
        console.log(`
            
Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${fare}
Total: KES ${totalFare}

Panda Pikipiki!

            `);
    }else {
        console.log("Weka number bwana usiwache hivyo ama unaandika maneno mingi, digits please!");
    }

    
}
calculateBodafare();