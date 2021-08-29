const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    // for(const country of counties){
    //     console.log(country);
    // }
    const countryDiv = document.getElementById('country');
    counties.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');  //  create div
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">show detals</button>
        `


        // const h3 = document.createElement('h3');  // create h3 tag
        // h3.innerText = country.name;
        // div.appendChild(h3);  // crate h3 tag appen kore bosalam
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countryDiv.appendChild(div);
    });
}


const loadCountryByName = name=> {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
    }

const displayCountryDetail = country => {
    console.log(country);
    const counrtryDiv = document.getElementById('country-detail');
    counrtryDiv.innerHTML= `
    <h4>${country.name}</h4>
    <p>subregion: ${country.subregion}</p>
    <img width="200px" src="${country.flag}">
    `
}