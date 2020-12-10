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
  const container2 = document.createElement('div');
  const card2 = document.createElement('div');
  const card22 = document.createElement('div');
  container2.classList.add('container');
  container2.classList.add('container-home');

  card2.classList.add('card2');
  card22.classList.add('card2');
  container2.append(card2, card22);
  const card2h1 = document.createElement('h1');
  card2h1.classList.add('title');
  card2h1.textContent = 'URLS';
  card22.appendChild(card2h1);

  document.querySelector('body').appendChild(container2);
};

const addUrlShort = (url) => {
  const urlTitle = document.querySelector('.url-title');
  urlTitle.textContent = 'your short url: ';
  const a = document.createElement('a');
  a.textContent = url;
  urlTitle.appendChild(a);
};

const addUrlData = (obj) => {
  obj.forEach((element) => {
    const h1T = document.createElement('h1');
    h1T.classList.add('url-title2');
    h1T.textContent = '- ';
    const a1 = document.createElement('a');
    a1.textContent = `${window.location.href}url/${element.urlshort}`;
    h1T.appendChild(a1);
    // h1T.appendChild(document.createTextNode(' : '));

    // const a2 = document.createElement('a');
    // h1T.appendChild(a2);
    // a2.textContent = element.urlshort;
    document.querySelectorAll('.card2').forEach((e, i) => {
      if (i === 1) { e.appendChild(h1T); }
    });
  });
};
if (typeof module !== 'undefined') {
  module.exports = {
    goToHome,
    addUrlShort,
    addUrlData,
  };
}
