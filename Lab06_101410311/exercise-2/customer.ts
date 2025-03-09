// customer.ts
class Customer {
  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = "John";
    this.lastName = "Doe";
  }

  greeter(): void {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  }
}

// Create an instance and call the greeter method
let customer = new Customer();
customer.greeter();
