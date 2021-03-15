let book = {
    name: "Isle of Dogs",
    author: "Patricia Cornwell",
    branch: "Palo Alto",
    genre: "Fiction",
    published: "2001"
};

var isle = newBook();

class Book {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
}
const isle = new Book('Isle', 'Patricia Cornwell', 'Murder Mystery');

class Author {
    constructor(name, nationality, age) {
        this.name = name;
        this.nationality = nationality;
        this.age = age;
    }
}
const patricia = new
    Author('Patricia Cornwell', 'American', 56);

class Branch {
    constructor(name, city, zipcode) {
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
    }
}
const paloalto = newBranch('Palo Alto Library', 'Palo Alto', 94303);

class Genre {
    constructor(type, element) {
        this.type = type;
        this.element = element;
    }
}
const fiction = newBranch('Fiction', 'Novel');

class Publish {
    constructor(name, company, year) {
        this.name = name;
        this.company = company;
        this.year = year;
    }
}
const putnam = newPublish('Putnam', 'Penguin', 2001);







