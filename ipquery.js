const axios = require('axios');

axios.get('https://api.ipquery.io/239.159.72.158?format=json')
.then(response => {
  console.log(response.data);
});