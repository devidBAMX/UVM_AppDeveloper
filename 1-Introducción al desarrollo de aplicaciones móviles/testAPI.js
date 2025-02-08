const {searchCountry} = require('./Search_Country.js');


async function run() {
    const countries = await searchCountry();
    console.log(countries);
}

run();
