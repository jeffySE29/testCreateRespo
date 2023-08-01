import bodyParser from 'body-parser';
import  express  from 'express';
import { addBook, getBooks } from './bookstore.js';
import { findBookById } from './bookstore.js';
import { updateBook, deleteBookById } from './bookstore.js'
import cors from 'cors'

const server = express()
const PORT = 3000

const authMiddleWare = (req, res, next) => {
    const password = req.headers['authorization'];
    if(password === '123456'){
        next();
    }else{
        res.status(401).send('Unauthorized')
    }
    
}

// server.use('/books',authMiddleWare); //de nhu nay thi nhung route nao bat dau = /books thi se bi anh huong
//hoac vo vao trong route cua thg can add luon
server.use(cors());
server.use(bodyParser.json())



//JSON = JavaScript Object Notation
//req = request
//res = response
server.get('/', (req, res) => {
    res.send('Welcome to my server')
})

server.get('/books', authMiddleWare,(req, res) => { //hoac nhu nay
    res.send(getBooks());
})

// server.get('/books/:id', (req, res) => {
//     const bookId = parseInt(req.params.id) //lấy id
//     res.send(findBookById(bookId));
// })

server.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id) //lấy id
    const book = findBookById(bookId);
    if(book == null){
        res.status(404).send('Book not found');
    }else{
        res.send(findBookById(bookId));
    }
})

server.post('/books', (req, res) => {
    const book = req.body;
    //xài thêm dấu ? thì nếu var?.value thì nếu var = undefined thì bỏ value sau luôn 
    //nếu như thuộc tính author có thêm 2 thuộc tính con nữa là dob , name chẳng hạn
    //nếu truyền vào thiếu author thì không có dấu ? sẽ bị undefined.thuộc tính => lỗi k thể đọc thuộc tính của undefined
    if(book?.title && book?.author){
        addBook(book);
        res.send('Book Added')
    }else{
        res.status(400).send('Missing field')
    }
   
})

server.put('/books', (req, res) => {
    // updateBook(req.body); //sửa id trên request về != string là được vì bên bookstore nó != string nên lỗi
    const bookUpdate = req.body;
    if(book?.title && book?.author){
        updateBook(bookUpdate)
        res.send('Book updated')
    }else{
        res.status(400).send('Missing field')
    }
})

server.delete('/books/:id', (req, res) => {
    const delBookId = parseInt(req.params.id); 
    const bookDel = findBookById(delBookId);
    if(!bookDel){
        res.status(404).send('Book not found');
    }else{
        deleteBookById(delBookId);
        res.send('Book deleted');
    }
})

server.listen(PORT, () => {
    console.log('Server is running')
})