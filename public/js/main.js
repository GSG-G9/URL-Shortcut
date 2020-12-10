// on start
(() => {
  const buttonContainer = document.querySelector('.button-container button');
  let isHome = false;
  let username = '';
  buttonContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#label').value.toLowerCase().trim();
    if (!name) { return; }
    if (!isHome) {
      fetch('/user/logInUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            username = data.name;
            goToHome(data.name);
            isHome = !isHome;
          }
        })
        .catch();
    } else {
      fetch('/user/addUserUrlInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, urlFull: name }),
      })
        .then((response) => response.json())
        .then((data) => {
          addUrlShort(`${window.location.href}url/${data.urlShort}`);
        })
        .catch();
    }
  });
})();
