const all = "https://restcountries.com/v3.1/all";

//searchName
const nameCountry = 'peru'
const country = `https://restcountries.com/v3.1/name/${nameCountry}`

fetch(country).then(
    response => response.json()
).then(data => {
    //const countryNames = data.map(country => country.name.common);
    console.log(data)
});