
/*
 * Author: Jyotika Banerjee
 * Library to use restCountries API directly.
 *
 * */




var restCountriesJB = {
    getBaseURL: function () {
        var url = 'http://restcountries.eu/rest/v1/';
        function fn() {
            return url;
        }
        return fn();
    },

    namespace_init: function(str){
        //Will accept a string of the organization structure.
        //This is primarily to provide the ability to extend the library

    },

    ajax: function(url, callback){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('done');
                var data = JSON.parse(xhr.responseText);
                callback(data);
            }
        }
        xhr.send();
    },


    allcountries: {

        getAllCountryNames: function(callback){
            var url = restCountriesJB.getBaseURL();
            restCountriesJB.ajax(url, function(data){
                var countries = data.map(function(elem){
                    return elem.name;
                });

                callback(countries);
            });
        },

        getAllCountryCapitals: function(callback){
            var url = restCountriesJB.getBaseURL();
            restCountriesJB.ajax(url, function(data){
                var CountryCapital = data.map(function (elem) {

                    return { country_name: elem.name, capital: elem.capital};

                });
                callback(CountryCapital);
            });

        }

    },

    country: {


        capital_city: {
            //capital_cache: [],
            getCountryByCapital: function(capital){
                var url = restCountriesJB.getBaseURL()+"capital/"+capital;
                restCountriesJB.ajax(url, function (data) {
                    var country = data[0].name;
                    console.log(country);
                    callback(country);
                });
            }
        },

        country_code: {
            //cc_cache: [],
            getCountryByCountryCode: function(cc){
                var url = restCountriesJB.getBaseURL()+"alpha/"+cc;
                restCountriesJB.ajax(url, function (data) {
                    var country = data.name;
                    console.log(country);
                    callback(country);
                });
            }

        },

        calling_code: {

            //calling_code_cache = [],
            getCountryByCallingCode: function(callc){
                var url = restCountriesJB.getBaseURL()+"callingcode/"+callc;
                restCountriesJB.ajax(url, function (data) {
                    var country
                    country = data[0].name;
                    //console.log(country);
                    callback(country);
                });
            }
        },

        country_name: {
            //cn_cache: [],
            getCountryByCountryName: function(cname){
                var url = restCountriesJB.getBaseURL()+"name/"+cname;
                restCountriesJB.ajax(url, function (data) {
                    var country = data[0].name;
                    // console.log(data);
                    callback(country);
                });
            }
        }
    },



    countries: {

        region: {

            getCountriesByRegion: function (region) {
                var url = restCountriesJB.getBaseURL()+"region/"+region;
                restCountriesJB.ajax(url, function (data) {
                    var countries = data.map(function (elem) {
                        return elem.name;
                    });

                    callback(countries);
                });
            }
        },

        subregion:{

            getCountriesBySubregion: function(subregion){
                var url = restCountriesJB.getBaseURL()+"region/"+subregion;
                restCountriesJB.ajax(url, function (data) {
                    var countries = data.map(function (elem) {
                        return elem.name;
                    });

                    callback(countries);
                });

            }
        },


        language: {
            //language_cache: [],
            //getCountriesByLanguage= function(lang){},
            //getLanguages = function (country_name) {}
            },

        currency: {
            //currency_cache: [],
            getCountriesByCurrency: function(curr){}
            //getCurrency: function(country_name){},
            // currencyConvert: function(country1,country2,amount){}
        }


    }

};
