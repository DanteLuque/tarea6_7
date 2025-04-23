fetch('https://api.ipquery.io/?format=json').then(
  response => response.json()
).then(data => {
console.log(data)
});