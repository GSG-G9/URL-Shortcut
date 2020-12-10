const goToHome = (name) => {
  const container = document.querySelector('.container');
  const cardAlt = document.querySelector(' .alt');
  container.removeChild(cardAlt);

  const buttonContainer = document.querySelector('.button-container button span');
  buttonContainer.textContent = 'Short it';
  document.querySelector('#label').value = '';

  const inputContainer = document.querySelector('.input-container label');
  inputContainer.textContent = 'Enter you url';

  const title = document.querySelector('.title');
  title.textContent = name;
  const hUrl = document.createElement('h1');
  hUrl.classList.add('url-title');
  document.querySelectorAll('.card').forEach((node, i) => {
    node.classList.add('card-home');
    if (i !== 0) { node.appendChild(hUrl); }
  });
  document.querySelector('.container').classList.add('container-home');
};

const addUrlShort = (url) => {
  const urlTitle = document.querySelector('.url-title');
  urlTitle.textContent = 'your short url: ';
  const a = document.createElement('a');
  a.textContent = url;
  urlTitle.appendChild(a);
};

if (typeof module !== 'undefined') {
  module.exports = {
    goToHome,
    addUrlShort,
  };
}
