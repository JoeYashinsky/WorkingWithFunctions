'use strict';

const bookings = [];

const createBooking = function(flightNumber, numberOfPassengers, price) {

    const booking = {
        flightNumber,
        numberOfPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking);
}

createBooking('LH123');