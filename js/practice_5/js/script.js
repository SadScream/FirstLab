class User {
    constructor(id = null, name = null, email = null, type = null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
    }

    getId() {
        return `#${this.id}`;
    }

    isAdmin() {
        return type == 'Admin';
    }
}

function createUser(name, email) {
    return new User(name = name, email = email);
}

console.log(createUser("Alex", "ahah@haha.ha"));

const user1 = new User(id = 100, type = "Admin");
console.log(user1.getId(), user1.isAdmin());
const user2 = new User(id = 21, type = "SimpleUser");
console.log(user2.getId(), user2.isAdmin());


class AreaOfCircle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return 2 * 3.14 * this._radius;
    }

    set radius(x) {
        this._radius = x;
    }
}

const area = new AreaOfCircle(2);
console.log(area.radius);
area.radius = 10;
console.log(area.radius);


class Course {
    constructor(mark) {
        this.mark = mark
    }

    getGrade() {
        return this.mark > 3 ? true : false;
    }

    getCertificate() {
        return this.getGrade() ? "Выдать сертификат" : "Курс не пройден";
    }
}

const course1 = new Course(5);
console.log(course1.getCertificate());

const course2 = new Course(3);
console.log(course2.getCertificate());