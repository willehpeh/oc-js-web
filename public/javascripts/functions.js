
const hashForm = document.getElementById('hash-form');
const hashInput = document.getElementById('secret');
const results = document.getElementById('results');

const apiBaseUrl = 'http://localhost:3000/';

hashForm.addEventListener('submit', ($event) => {
  $event.preventDefault();
  hashRequestSequence();
});

function postRequest(url, data) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('POST', url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(JSON.parse(request.response));
        }
        else {
          reject({status: request.status, message: request.response ? JSON.parse(request.response).message : ''});
        }
      }
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  });
}

async function hashRequestSequence() {

  if (results.childElementCount > 0) {
    results.innerHTML = '';
  }

  // show original string
  let plainText = document.createElement('h2');
  plainText.textContent = 'Original value: ' + hashInput.value;
  results.appendChild(plainText);

  // send first request
  let dataObject = {
    secret: hashInput.value
  };
  try {
    const createHashResponse = await postRequest(apiBaseUrl + 'create-hash', dataObject);

    // show hashed string
    let hashText = document.createElement('p');
    hashText.textContent = 'Hash: ' + createHashResponse.hash;
    results.appendChild(hashText);

    // send second request
    dataObject = {
      plain: hashInput.value,
      hash: createHashResponse.hash
    };
    try {
      const checkHashResponse = await postRequest(apiBaseUrl + 'check-hash', dataObject);

      // show image
      let secretImg = document.createElement('img');
      secretImg.setAttribute('src', checkHashResponse.url);
      secretImg.style.maxWidth = '100%';
      results.appendChild(secretImg);
    }
    catch (error) {
      let errorMessage = document.createElement('h2');
      errorMessage.textContent = 'The server responded with: ' + error.message + ' (' + error.status + ')!';
      results.appendChild(errorMessage);
    }
  }
  catch (error) {
    let errorMessage = document.createElement('h2');
    errorMessage.textContent = 'The server responded with: ' + error.message + ' (' + error.status + ')!';
    results.appendChild(errorMessage);
  }
}