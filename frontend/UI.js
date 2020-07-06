import BookService from './services/BookService';
const bookService = new BookService();

class UI {

    renderBooks() {}

    async addANewBook(book) {
        await bookService.postBooks(book);
        this.clearBookForm();
    }

    clearBookForm() {
        document.getElementById('book-form').reset();
    }

    renderMessage() {}

    deleteBook() {}


}

export default UI;