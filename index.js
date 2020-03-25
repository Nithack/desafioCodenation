var axios = require('axios')

axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=29dc467f89c59581b395cf42b7a19b9563ab61d8')
.then(function(response){
  console.log(response.data); 
  console.log(response.status); 
});  