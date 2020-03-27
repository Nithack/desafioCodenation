var axios = require('axios')
var crypt = require('text-cryptography')
var sha1 = require('sha1')
var enviar = require('request')
var fs = require('fs');
var formData = require('form-data')


const urlget = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=29dc467f89c59581b395cf42b7a19b9563ab61d8'
const url ='https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=29dc467f89c59581b395cf42b7a19b9563ab61d8'



axios.get(urlget)
.then(function(response){

  const ceasar = new crypt.Caesar(response.data.numero_casas)

  response.data.decifrado = ceasar.decrypt(response.data.cifrado);

  response.data.resumo_criptografico = sha1(response.data.decifrado);

  fs.writeFileSync('answer.json', JSON.stringify(response.data))


});

var answer = new formData()

answer.append('answer', fs.createReadStream('./answer.json'))

axios.post(url, answer, {headers:answer.getHeaders()})
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
