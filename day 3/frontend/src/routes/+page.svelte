<!-- javaScript -->
<script>
    import axios from "axios";
    import { onMount } from "svelte";
    let bookTitle ='';
    let bookAuthor ='';
    let books = [];

    async function getBooks() {
        // axios.get('http://localhost:3000/books').then(res => {
        //     books = res.data
        // }) //cach viet bth co the bi loi chua loadd ma da in data
        let response = await axios.get("http://localhost:3000/books");
        books = response.data;
        console.log(books);
    }

    
    async function addBook(){
        //hoac la co the tao 1 object book 2 thuoc tinh title author 
        //o ngoai roi truyen vao book trong function
        const book = {
            title: bookTitle,
            author: bookAuthor
        }
        await axios.post('http://localhost:3000/books', book)
        getBooks();
    }

    async function deleteBook(bookID){
        await axios.delete(`http://localhost:3000/books/${bookID}`)
        getBooks();
    }
    onMount(() => {
        getBooks();
    });
</script>
<h1>Add book</h1>
<span>Title:</span><input bind:value={bookTitle} type="text"><br>
<span>Author:</span><input bind:value={bookAuthor} type="text"><br>
<button on:click={addBook}>Add</button>



<!-- HTML -->
<h1>Welcome come to my website</h1>
{#each books as book}
    <div class="book-item">
        <p><b>Title: {book.title}</b> by {book.author}</p>
        <button on:click={() => deleteBook(book.id)}>Delete</button>
    </div>
{/each}

<!-- <p>Number: {number}</p> -->

<!-- CSS -->

<style>
    .book-item {
        border: 1px solid black;
        padding: 10px;
        width: 200px;
        margin: 2px;
    }
</style>
