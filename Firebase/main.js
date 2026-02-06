import { booksRef, db } from "./modules/firebaseconfig.js";
import { onValue, ref, remove, update, push } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";
import { Book } from "./class.js";
import { filterFavo } from "./modules/filter.js";
import { sortList } from "./modules/filter.js";
import { render } from "./render.js"
let booklist = []

onValue(booksRef, snapShot => {
    // console.log(snapShot.val())
    const dbObj = snapShot.val();
    booklist = [];
    for (const key in dbObj) {

        const book = new Book(dbObj[key].title, dbObj[key].author, dbObj[key].favorite, key)
        booklist.push(book)

        // console.log(key, dbObj[key])
        // console.log(dbObj[key].author, dbObj[key].favorite, dbObj[key].title)
    }
    console.log(booklist.length)
    render(booklist)
})

// Add new user
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const title = form.querySelector('#name').value.trim();
    const author = form.querySelector('#admin').value.trim();
    const favorite = false

    const Fries = push(booksRef).key;
    if (Fries) {

        const Chez = ref(db, '/books/' + Fries);
        update(Chez, { title, favorite, author });
    }

})

const filterSelect = document.querySelector('#filter');
const sortSelect = document.querySelector('#sort');

filterSelect.addEventListener('change', event => {
    console.log(filterSelect.value)
    if (filterSelect.value == "favorite") {
        const fillerFavo = filterFavo(booklist)
        const shortList = sortList(fillerFavo, sortSelect.value)
        render(fillerFavo)
    } else{
        render(booklist)
    }
})

sortSelect.addEventListener('change', event => {
    const fillerFavo = filterFavo(booklist)
        const shortList = sortList(fillerFavo, sortSelect.value)
        render(shortList)
})