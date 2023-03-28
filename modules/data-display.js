const dataDisplay = (books) => {
  const bookList = document.querySelector('.book-list');
  if (books.length > 0) {
    for (let i = 0; i < books.length; i += 1) {
      const myBook = books[i];
      const li = document.createElement('li');
      li.innerHTML = `${myBook.title} by ${myBook.author}`;
      if (i % 2 === 0) {
        li.classList.add('grey-bg');
      } else {
        li.classList.add('white-bg');
      }
      const btn = document.createElement('button');
      btn.classList.add('delete-btn');
      btn.id = i;
      btn.innerHTML = 'Remove';
      li.appendChild(btn);
      bookList.appendChild(li);
    }
  } else {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'No record found';
    bookList.appendChild(h3);
  }
};

export default dataDisplay;