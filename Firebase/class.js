export class Book {
    #title;
    #author;
    #favorite;
    #id;
    constructor(title, author, favorite, id){
        this.#title = title
        this.#author = author
        this.#favorite = favorite
        this.#id = id
    }
    // Getters för att kunna läsa värdena
    getTitle(){
        return this.#title;
    }

    getAuthor(){
        return this.#author
    }

    getFavorite(){
        return this.#favorite
    }

    getId(){
        return this.#id
    }
}

