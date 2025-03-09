// customer.ts
var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = "John";
        this.lastName = "Doe";
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
// Create an instance and call the greeter method
var customer = new Customer();
customer.greeter();
