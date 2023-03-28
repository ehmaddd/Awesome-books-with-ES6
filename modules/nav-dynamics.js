const navBar = () => {
  const nav = document.querySelectorAll('nav a');
  const bookCatalog = document.querySelector('#book-list');
  const addBookForm = document.querySelector('#add-book');
  const contactInfo = document.querySelector('#contact-info');
  for (let a = 0; a < nav.length; a += 1) {
    nav[a].addEventListener('click', (ev) => {
      if (ev.target.id === 'showList') {
        nav[0].classList.add('active-link');
        nav[1].classList.remove('active-link');
        nav[2].classList.remove('active-link');
        bookCatalog.style.display = 'block';
        addBookForm.style.display = 'none';
        contactInfo.style.display = 'none';
      } else if (ev.target.id === 'showForm') {
        nav[0].classList.remove('active-link');
        nav[1].classList.add('active-link');
        nav[2].classList.remove('active-link');
        bookCatalog.style.display = 'none';
        addBookForm.style.display = 'block';
        contactInfo.style.display = 'none';
      } else if (ev.target.id === 'showContact') {
        nav[0].classList.remove('active-link');
        nav[1].classList.remove('active-link');
        nav[2].classList.add('active-link');
        bookCatalog.style.display = 'none';
        addBookForm.style.display = 'none';
        contactInfo.style.display = 'block';
      }
    });
  }
};

export default navBar;