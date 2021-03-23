'use strict';

const booking = [];

const createBooking = function(flightNumber, numberOfPassengers, price) {

    const booking = {
        flightNumber,
        numberOfPassengers,
        price
    }
    console.log(booking)
    booking.push(booking);
}