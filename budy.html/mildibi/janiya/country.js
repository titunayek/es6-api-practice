const loadCounrtries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCounrtries();

const displayCountries = countris =>{
   
    const countrydiv = document.getElementById('countries');
   
    countris.forEach(country => {
        // console.log(country);
        const div = document. createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryDerails('${country.name}')">Detailes</button>
        `

        
        countrydiv.appendChild(div);
    });
}

const loadCountryDerails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryAbout(data[0]))
}

const displayCountryAbout = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h4>${country.name}</h4>
        <p>${country.population}</p>
        <img width="200px" src="${country.flag}">
        
        `
}