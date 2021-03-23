'use strict';

/*
const bookings = [];

const createBooking = function(
    flightNumber, 
    numberOfPassengers = 1, 
    price = 199 * numberOfPassengers
    ) {
    // numberOfPassengers = numberOfPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNumber,
        numberOfPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking);
}

createBooking('LH123');
//{flightNumber: "LH123", numberOfPassengers: undefined, price: undefined}

//After including OR Operator with default values
// {flightNumber: "LH123", numberOfPassengers: 1, price: 199}

createBooking('LH123', 2, 800);
// {flightNumber: "LH123", numberOfPassengers: 2, price: 800}

// After changing 'price' to 199 * numberOfPassengers
createBooking('LH123', 2) // {flightNumber: "LH123", #ofPass: 2, price: 398}
createBooking('LH123', 5) // {flightNumber: "LH123", #ofPass: 5, price: 995}

createBooking('LH123', undefined, 1000); //{flight#: "LH123", #ofPass: 1, price: 1000}
*/

const flight = 'LH234';
const joe = {
    name: 'Joe Tinker', 
    passport: 234432
}

const checkIn = function(flightNumber, passenger) {

}

checkIn(flight, joe);