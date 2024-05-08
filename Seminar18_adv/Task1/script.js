/*
Представьте, что у вас есть класс для управления библиотекой. 
В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

+Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
+Реализуйте геттер allBooks, который возвращает текущий список книг.
+Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
+Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
+Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
+Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class Book{
    constructor(author, name, pages){
        this.author = author;
        this.name = name;
        this.pages = pages;
    }

    equals(other){
        return(
            this.author===other.author&&
            this.name===other.name&&
            this.pages===other.pages
        );
    }
}

class Library{
    #books = [];

    constructor(booksArray){
        let checkCopy = false;
        for (let i = 0; i < booksArray.length-1 && !checkCopy; i++){
            for (let j = i+1; j < booksArray.length && !checkCopy; j++){
                if (booksArray[i].equals(booksArray[j])){
                    checkCopy = true;
                }
            }
        }
        if (checkCopy) {
            throw new Error ("В перечне книг есть копии")
        }
        else {
            this.#books=booksArray;
        }
        
    }

    allBooks(){
        return this.#books;
    }

    addBook(book){
        if (this.checkCopy(book) > 0){
            throw new Error("Такая книга уже есть");
        }
        else {
            this.#books.push(book);
        }
        
    }

    removeBook(book){
        let index = this.findIndex(book);
        if (index < 0) {
            throw new Error("Такой книги в библиотеке нет");
        }
        else {
            this.#books.splice(index, 1);
        }
        
    }

    hasBook(book) {
        let index = this.findIndex(book);
        if (index > 0) {
            return true;
        }
        else return false;
    }

    findIndex(book) {
        return this.#books.findIndex(b => b.equals(book));
    }

    checkCopy(book) {
        if (this.findIndex(book) > 0){
            return true;
        }
        else return false;
    }
}

const book1 = new Book("Толстой", "Война и мир", 1000);
const book2 = new Book("Пушкин", "Евгений Онегин", 300);
const book3 = new Book("Шекспир", "Ромео и Джульетта", 400);
const book4 = new Book("Шекспир", "Ромео и Джульетта", 400);

const bookArray = [book1, book2, book3];

const myLibrary = new Library(bookArray);

console.log(myLibrary.allBooks());
myLibrary.addBook(new Book("Чехов", "Вишневый сад", "400"));
//myLibrary.addBook(new Book("Чехов", "Вишневый сад", "400"));
myLibrary.removeBook(book4);
myLibrary.removeBook(book4);
console.log(myLibrary.allBooks());
