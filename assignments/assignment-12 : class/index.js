class Person {
    static instanceCount = 0;
    constructor(name) {
        this.name = name;
        Person.instanceCount++;
    }
    introduceYourself() {
        console.log(`Hello, my name is ${this.name}`);
    }
    getRole() {
        return "Person";
    }
    static countInstances() {
        return Person.instanceCount;
    }
}
const person1 = new Person("Alice");
person1.introduceYourself(); // Output: Hello, my name is Alice
console.log(person1.getRole()); // Output: Person
console.log(Person.countInstances()); // Output: 1

const person2 = new Person("Bob");
console.log(Person.countInstances()); // Output: 2
