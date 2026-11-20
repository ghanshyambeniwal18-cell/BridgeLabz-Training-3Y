// Q1. Student Result Processing (reduce + Classes)

console.log("\n===== Q1. Student Result Processing =====");

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        let average = total / this.marks.length;

        let grade;

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 50) {
            grade = "C";
        } else {
            grade = "F";
        }

        return { average, grade };
    }
}

let students = [
    new Student("Rahul", [90, 85, 95]),
    new Student("Aman", [75, 80, 70]),
    new Student("Ravi", [40, 45, 35])
];

students.forEach(student => {
    let result = student.calculateAverage();

    console.log(`Name: ${student.name}`);
    console.log(`Average: ${result.average.toFixed(2)}`);
    console.log(`Grade: ${result.grade}`);
});


// Q2. Online Food Ordering (map + Error Handling)

console.log("\n===== Q2. Online Food Ordering =====");

const menu = [
    { item: "Pizza", price: 250 },
    { item: "Burger", price: 120 },
    { item: "Sandwich", price: 100 },
    { item: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        let food = menu.find(menuItem => menuItem.item === item);

        if (!food) {
            throw new Error(`${item} is not available in the menu.`);
        }

        return food.price;
    });

    let total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

try {
    let bill = calculateBill(["Pizza", "Burger", "Pasta"]);
    console.log(`Total Bill: ₹${bill}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}


try {
    let bill = calculateBill(["Pizza", "Sushi"]);
    console.log(`Total Bill: ₹${bill}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}


// Q3. Product Discount System

console.log("\n===== Q3. Product Discount System =====");

function Product(name, price) {
    this.name = name;
    this.price = price;
}


Product.prototype.applyDiscount = function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
};

let product1 = new Product("Laptop", 50000);
let product2 = new Product("Mobile", 20000);
let product3 = new Product("Headphones", 5000);

console.log(`${product1.name}: ₹${product1.applyDiscount(10)}`);
console.log(`${product2.name}: ₹${product2.applyDiscount(15)}`);
console.log(`${product3.name}: ₹${product3.applyDiscount(20)}`);


// Q4. Employee Inheritance

console.log("\n===== Q4. Employee Inheritance =====");

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is doing regular work.`);
    }
}

class Manager extends Employee {
    work() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }
}

let emp1 = new Employee("Rahul", "HR");
let emp2 = new Manager("Aman", "IT");

emp1.work();
emp2.work();


// Q5. Ride-Sharing Application

console.log("\n===== Q5. Ride-Sharing Application =====");

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0 ||
            !Number.isFinite(this.distance)) {
            throw new Error("Invalid distance provided.");
        }

        let fare = this.distance * 15;
        return fare;
    }
}

let driver = new Driver("Aman", 4.8, "Swift");

console.log(`Driver: ${driver.name}`);
console.log(`Rating: ${driver.rating}`);
console.log(`Vehicle: ${driver.vehicle}`);

try {
    let trip = new Trip("Mathura", "Agra", 60);

    console.log(`From: ${trip.fromLocation}`);
    console.log(`To: ${trip.toLocation}`);
    console.log(`Total Fare: ₹${trip.calculateFare()}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

try {
    let trip2 = new Trip("Mathura", "Delhi", -10);
    console.log(`Fare: ₹${trip2.calculateFare()}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}


// Q6. E-Commerce Inventory System

console.log("\n===== Q6. E-Commerce Inventory System =====");

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Shoes", category: "Fashion", price: 2500, stock: 10 },
    { id: 3, name: "Mobile", category: "Electronics", price: 20000, stock: 2 },
    { id: 4, name: "Book", category: "Education", price: 500, stock: 20 },
    { id: 5, name: "Shirt", category: "Fashion", price: 1200, stock: 4 }
];

function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product.name);

        return groups;
    }, {});
}

console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted by Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value: ₹" +
    calculateTotalInventoryValue());

console.log("Products Grouped by Category:");
console.log(groupByCategory());


// Q7. Banking Application (Private Fields)

console.log("\n===== Q7. Banking Application =====");

class BankAccount {
    #balance;

    constructor(balance) {
        if (balance < 0 || !Number.isFinite(balance)) {
            throw new Error("Invalid opening balance.");
        }

        this.#balance = balance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Invalid deposit amount.");
        }

        this.#balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Invalid withdrawal amount.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;
        console.log(`Withdrawn: ₹${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(10000);

try {
    account.deposit(5000);
    console.log(`Balance: ₹${account.getBalance()}`);

    account.withdraw(3000);
    console.log(`Balance: ₹${account.getBalance()}`);

    account.withdraw(20000);

} catch (error) {
    console.log(`Error: ${error.message}`);
}

console.log(`Final Balance: ₹${account.getBalance()}`);


// Q8. Movie Ticket Booking System

console.log("\n===== Q8. Movie Ticket Booking System =====");

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat Number: ${this.seatNo}`);
    console.log(`Ticket Price: ₹${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("Avengers", "A12", 250, 30);
let ticket2 = new OnlineTicket("Batman", "B15", 300, 40);

ticket1.printTicket();
console.log(`Convenience Fee: ₹${ticket1.convenienceFee}`);
console.log(`Total Amount: ₹${ticket1.getTotalAmount()}`);

console.log("------------------");

ticket2.printTicket();
console.log(`Convenience Fee: ₹${ticket2.convenienceFee}`);
console.log(`Total Amount: ₹${ticket2.getTotalAmount()}`);


// Q9. Fitness App Analytics

console.log("\n===== Q9. Fitness App Analytics =====");

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Workout data is empty!");
        }

        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        let total = this.data.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(user => {
            return `${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`;
        });
    }
}

try {
    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("Average Calories:");
    console.log(fitness.getAverageCalories());

    console.log("User Summary:");
    console.log(fitness.getUserSummary());

} catch (error) {
    console.log(`Error: ${error.message}`);
}
