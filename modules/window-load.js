const windowLoad = () => {
  const bookCatalog = document.querySelector('#book-list');
  const addBookForm = document.querySelector('#add-book');
  const contactInfo = document.querySelector('#contact-info');
  const nav = document.querySelectorAll('nav a');

  nav[0].classList.add('active-link');
  addBookForm.classList.add('hide');
  contactInfo.classList.add('hide');
  bookCatalog.style.display = 'block';
  addBookForm.style.display = 'none';
  contactInfo.style.display = 'none';
};

export default windowLoad;