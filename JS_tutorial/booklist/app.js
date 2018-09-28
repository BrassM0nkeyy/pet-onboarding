//book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() {

}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //tr ele
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    console.log(row);

}

//event listeners
document.getElementById('book-form').addEventListener('submit', 
function(e){
    //get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

        //instantiate book
        const book = new Book(title, author, isbn);
        
        //instantiate UI
        const ui = new UI();

        //add book to list
        ui.addBookToList(book);

        console.log(ui);
        

    e.preventDefault();
})