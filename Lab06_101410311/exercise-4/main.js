"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var customer_1 = require("./customer");
// Create an instance of Customer and call methods
var customer = new customer_1.Customer("Alice", "Johnson", 30);
customer.greeter();
customer.GetAge();
