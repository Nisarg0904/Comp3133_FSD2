// customer.ts with private properties and constructor
class Customer {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeter(): void {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  }
}

// Create an instance with parameters
let customer = new Customer("Jane", "Smith");
customer.greeter();
