/**
 * hotelCost
 * @param {*} nights 
 * @returns 
 */
function hotelCost(nights) {
    return nights * 140;
}

/**
 * planeRideCost
 * @param {*} destination 
 * @returns 
 */
function planeRideCost(destination) {
    switch(destination.toLowerCase()) {
        case "london": return 183;
        case "paris": return 220;
        default: return 300;
    }
}

function rentalCarCost(days) {
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95;
    }
    return cost;
}

/**
 * totalVacationCost
 */
function totalVacationCost() {
    let nights, days, destination;

    while (true) {
        nights = Number(prompt("How many nights at the hotel?"));
        if (!isNaN(nights) && nights > 0) break;
    }

    while (true) {
        days = Number(prompt("How many days renting the car?"));
        if (!isNaN(days) && days > 0) break;
    }

    while (true) {
        destination = prompt("Where are you going? (London/Paris/Other)").trim();
        if (destination) break;
    }

    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. Total: $${hotel + plane + car}`);
}

totalVacationCost();

// To test go to the dev tools, then console, and paste the code there then hit 'Enter'