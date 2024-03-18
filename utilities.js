const { createClient } = supabase

const _supabase = createClient('https://xftjoyrggcewuljctysj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdGpveXJnZ2Nld3VsamN0eXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2Mzc3MTAsImV4cCI6MjAyNjIxMzcxMH0.SEYn_DUU26-ERYzjxgyN4C50jNfYls-oW_t2olsHzUE')

async function getBooks() {
    let { data: books, error } = await _supabase
        .from('Books')
        .select('*');

    let tbody = document.querySelector('#BooksTable tbody');
    
    books.forEach(book => {
        let row = tbody.insertRow();
        row.insertCell(0).textContent = book.Title;
        row.insertCell(1).textContent = book.Author;
        row.insertCell(2).textContent = book.ISBN;
    });
}

getBooks();