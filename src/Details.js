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
            return value.company === name;
        });
        //Convert the [key, value] pairs into an array of values
        let country = filtered.map(([_, value]) => value);

        return country[0];
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
                        
                        <div className="description">
                            <h1>{name}</h1>
                            <div className="info">

                                <p><b>Compañia: </b>{country.company}</p>
                                <p><b>Ciudad: </b>{country.location}</p>
                                <p><b>Fecha: </b>{country.pubDate}</p>
                                <p><b>Página Web: </b>{country.type}</p>
                                <p><a href={country.link}>Postular Aquí: </a></p>
                            </div>
                            <div className="info">
                            <p><b>Contenido: </b>{country.content}</p>
                            
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