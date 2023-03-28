import { DateTime } from './luxon.js';

const showTime = () => {
  const timeDiv = document.getElementById('time-div');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = DateTime.now();
  const date = `${monthNames[(today.month + 1)]} ${today.day} ${today.year}`;
  const time = `${today.hour}:${today.minute}:${today.second}`;
  const dateTime = `<p>${date}</p><h3>${time}</h3>`;

  timeDiv.innerHTML = dateTime;
  setTimeout(showTime, 50);
};

export default showTime;