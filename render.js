import { booksRef, db } from "./modules/firebaseconfig.js";
import { onValue, ref, remove, update, push } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";
export function render(fillter) {

    const wrapper = document.querySelector('#users');
    wrapper.innerHTML = '';
    // wrapper.innerHTML = '';

    fillter.forEach(book => {
        const title = document.createElement("h2")
        const author = document.createElement("p")
        const favorite = document.createElement("p")
        const List = document.createElement("button")
        const delBtn = document.createElement("button")

        title.innerText = book.getTitle()
        author.innerText = book.getAuthor()
        favorite.innerText = book.getFavorite()
        delBtn.innerText = `Remove`
        
        wrapper.append(title, author, favorite, delBtn)

        // const beat = document.createElement("p")
        // beat.innerText = book.getId()

        // const h1 = document.createElement('h1');
        const booksRef = ref(db, '/books/' + book.getId()); //Referensen till användaren

        // // Uppdaterar admin false till true eller true till false
        title.addEventListener('click', () => {
            update(booksRef, { favorite: !book.getFavorite() })
        })
        // // Ta bort noden från databasen
        delBtn.addEventListener('click', () => {
            remove(booksRef)
        })
    })
}