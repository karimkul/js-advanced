function Pet(name) {
    this.name = name;
    this.hunger = 0;
    this.happiness = 10;
}

Pet.prototype.eat = function () {
    if (this.hunger > 0) {
        this.hunger -= 1;
    }
    if (this.happiness < 10) {
        this.happiness += 1;
    }
};

Pet.prototype.play = function () {
    if (this.happiness < 10) {
        this.happiness += 2;
    }
    if (this.hunger < 10) {
        this.hunger += 1;
    }
};

Pet.prototype.sleep = function () {
    if (this.hunger < 10) {
        this.hunger += 1;
    }
};

Pet.prototype.status = function () {
    let mood = "";
    if (this.happiness === 10 && this.hunger === 0) {
        mood = "feeling great!";
    } else if (this.happiness < 5) {
        mood = "feeling sad!";
    } else if (this.hunger > 5) {
        mood = "really hungry!";
    } else {
        mood = "feeling okay!";
    }
    return `${this.name} is ${mood}`;
};

Pet.prototype.getOlder = function () {
    if (this.hunger < 10) {
        this.hunger += 1;
    }
    if (this.happiness > 0) {
        this.happiness -= 1;
    }
};

let fluffy = new Pet("Fluffy");
fluffy.eat();
fluffy.play();
fluffy.sleep();
console.log(fluffy.status()); // Example output: "Fluffy is feeling okay."
fluffy.getOlder();
console.log(fluffy.status()); // Example output: "Fluffy is feeling sad."
