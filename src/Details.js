import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";


const Details = (props) => {
    const {countries, isFetch} = props;
    
    const { name } = useParams();

    const history = useHistory();

    const getCountry = (countries) =>{
        const asArray = Object.entries(countries);
        //Filter our countries Object list
        const filtered = asArray.filter(([key, value]) => {
            return value.name.common === name;
        });
        //Convert the [key, value] pairs into an array of values
        let country = filtered.map(([_, value]) => value);

        return country[0];
    }
    const mapProp = (property) => {
        if (property !== null || property !== undefined){
            if (typeof(property) === "object"){
                const asArray = Object.entries(property);
                console.log(asArray);
                const filtered = asArray.map(([key, value]) => {
                    return value;
                });
                console.log(filtered);
                return filtered;
            }else{
                console.log(typeof(property));
                return [];
            }
        }
    }
    const renderBorders = (object) => {
        const borderCodes = mapProp(object);
        //console.log(borderCodes);

        const countriesArray = Object.entries(countries);
        //console.log("Countries Array:");
        //console.log(countriesArray);

        var filtered = countriesArray.filter(([key, country]) => borderCodes.includes(country?.cca3));
        //console.log("Filtered: "+filtered);

        const names = filtered.map(([key, value]) => value?.name?.common);
        //console.log("Names: "+names);
        
        const borders = names.map((name, key) => {
            return (
                <Link className="App-link" to={`/country/${name}`}>
                    <button key={`${name}_border_${key}`} className="light-button">{name}</button>
                </Link>
            )
        });
        return borders;
    }
    const renderLanguages = (object) => {
        const languages = mapProp(object);
        console.log(languages);

        var output = "";
        for (let i = 0; i < languages.length; i++) {
            output+=languages[i];
            if (i < languages.length - 1){
                output+=", ";
            }
        }
        return output;
    }
    const renderCurrencies = (object) =>{
        const currencies = mapProp(object);
        const monedasArray = currencies.map((currency) => currency.name);
        var output = "";
        for (let i = 0; i < monedasArray.length; i++) {
            output+=monedasArray[i];
            if (i < monedasArray.length - 1){
                output+=", ";
            }
        }
        return output;
    }

    const country = getCountry(countries);

    useEffect(() => {
        document.title = `${name}`;
    });

    const redirect = (route) => {
        document.title = "Countries App";
        history.push(route);
    }

    if (isFetch && country !== null && country !== undefined){
        return (
            <div>
                <div className="container-80">
                    <Link className="App-link" to="/">
                        <button className="light-button back-button">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                            <p>Back</p>
                        </button>
                    </Link>
                </div>
                <div className="container-80">
                    <div className="container-double">
                        <div className="image">
                            <img src={country.flags.svg} alt={name+" flag"}/>
                        </div>
                        <div className="description">
                            <h1>{name}</h1>
                            <div className="info">
                                <p><b>Native Name: </b>{country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}</p>
                                <p><b>Population: </b>{Number(country.population).toLocaleString('en-US')}</p>
                                <p><b>Region: </b>{country.region}</p>
                                <p><b>Sub Region: </b>{country.subregion}</p>
                                <p><b>Capital: </b>{country.capital}</p>
                            </div>
                            <div className="info">
                                <p><b>Top Level Domain: </b>{country.tld}</p>
                                <p><b>Currencies: </b>{renderCurrencies(country.currencies)}</p>
                                <p><b>Languages: </b>{renderLanguages(country.languages)}</p>
                            </div>
                            <div className="borders">
                                <p><b>Border Countries: </b></p>
                                    {renderBorders(country.borders)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        redirect("/");
        return (
        <div className="container-80">
            <h1>Cargando datos del país...</h1>
        </div>
        )
    }
};
export default Details;