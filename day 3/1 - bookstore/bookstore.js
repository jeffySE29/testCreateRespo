let books = [
    {id: 1, title: 'Harry Potter', author: 'JK.Rowling'},
    {id: 2, title: 'Title 2', author: 'author 2'}
]

//thêm export để xuất function ra những file khác dùng
export function getBooks(){
    return books
}

export function addBook(book){
    books.push({
        id: books.length +1,
        title: book.title,
        author: book.author
    })
}

export function findBookById(bookId){
    return books.find(book => {
        return book.id === bookId
    })
}

export function deleteBookById(bookId){
    books = books.filter(book => { //lọc lại 1 mảng có id khác với id của book vừa xóa
        return book.id !== bookId //ghi đè mảng mới không có id vừa xóa lên mảng cũ coi như xóa 
    })
}

export function updateBook(book){
    const bookIndex = books.findIndex(eachBook => {
        return eachBook.id === book.id
    })
    books[bookIndex].title = book.title;
    books[bookIndex].author = book.author;
}