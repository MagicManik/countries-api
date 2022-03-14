const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    // যার ভেতর এ্যাপেন্ড করবো তাকে ধরে আনা হইছে।
    const countriesBox = document.getElementById('countries');

    for (const country of countries) {
        // কান্ট্রিগুলো আর কান্ট্রির নামগুলো ঠিকঠাক পাওয়া যাচ্ছে কিনা তা চেক করার জন্য console log করে দেখা হচ্ছে
        // console.log(country)
        // console.log(country.name.common);

        // একটা div ক্রিয়েট করে তার ভেতর কান্ট্রি নেইম আর কান্ট্রির ক্যাপিটাল এ্যাপেন্ডক করা হচ্ছে।
        const div = document.createElement('div');
        div.classList = 'country-box';
        div.innerHTML = `
        <h1 class="text-color">Name: ${country.name.common}</h1>
        <h4 class="text-secondary-color">Capital: ${country.capital}<h4>
        <button id="button" onclick="loadCountriesByName('${country.name.common}')">detail</button>
        `
        countriesBox.appendChild(div);
    }

}


// ডাইনামিকভাবে সব কান্ট্রিকে নিয়ে আসি
const loadCountriesByName = countryName => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))
}




const displayCountryDetail = name => {
    console.log(name)
    const setCountryDetail = document.getElementById('country-details');
    setCountryDetail.innerHTML = `
        <h1>${name[0].name.common}</h1>
        <img src="${name[0].flags.png}">
    `

    // const setCountryDetail = document.getElementById('country-details');
    // const countryDetail = document.createElement('div');
    // countryDetail.innerHTML = `
    // <h2>Name: ${name[0].name.common}</h2>
    // `
    // setCountryDetail.appendChild(countryDetail);

}