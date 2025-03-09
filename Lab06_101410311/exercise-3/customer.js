// customer.ts with private properties and constructor
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
// Create an instance with parameters
var customer = new Customer("Jane", "Smith");
customer.greeter();
