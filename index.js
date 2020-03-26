var axios = require('axios')

var crypt = require('text-cryptography')

var sha1 = require('sha1')

var fs = require('file-system');


const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=29dc467f89c59581b395cf42b7a19b9563ab61d8'

axios.get(url)
.then(function(response){

  const ceasar = new crypt.Caesar(response.data.numero_casas)

  response.data.decifrado = ceasar.decrypt(response.data.cifrado);

  response.data.resumo_criptografico = sha1(response.data.decifrado);

  fs.writeFileSync('answer.json', JSON.stringify(response.data))

  console.log(response.data);
  
});
axios.post(url).then(function(response))