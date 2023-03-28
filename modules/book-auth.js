const bookAuth = () => {
  const titleText = document.querySelector('#title').value;
  const authorText = document.querySelector('#author').value;
  let book;

  if (titleText === '' && authorText === '') {
    const titleBox = document.querySelector('#title');
    const authorBox = document.querySelector('#author');
    titleBox.classList.add('border-highlight');
    authorBox.classList.add('border-highlight');
  } else if (titleText === '') {
    const titleBox = document.querySelector('#title');
    titleBox.classList.add('border-highlight');
  } else if (authorText === '') {
    const authorBox = document.querySelector('#author');
    authorBox.classList.add('border-highlight');
  } else {
    book = {
      title: titleText,
      author: authorText,
    };
  }
  return book;
};

export default bookAuth;