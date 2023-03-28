const removeList = () => {
  const bookList = document.querySelector('.book-list');
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }
};

export default removeList;