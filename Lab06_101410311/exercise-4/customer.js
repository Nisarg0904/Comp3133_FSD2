"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
// customer.ts - module file
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
    };
    // Method to get and log the age
    Customer.prototype.GetAge = function () {
        console.log("Age: ".concat(this._age));
        return this._age;
    };
    return Customer;
}());
exports.Customer = Customer;
