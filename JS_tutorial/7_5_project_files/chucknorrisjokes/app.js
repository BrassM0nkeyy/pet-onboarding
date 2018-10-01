document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      //console.log(response.value[0].joke.replace('Chuck Norris', ''));

      let output = '';
      
      if( response.type === 'success') {
          response.value.forEach(function(joke) {
            output += `<li>${joke.joke.replace(/Chuck Norris||Chuck Norris's||Chuck Norris'/g, '')}</li>`
        });
      } else {
        output += `<li>something went wrong</li>`
      }

      document.querySelector('.jokes').innerHTML = output;
    }  

  }
  
  xhr.send();
  e.preventDefault();
}