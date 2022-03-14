import React from "react";
import Card from "./Card";

const Countries = (props) => {
    const {countries, isFetch} = props;

    const renderCountries = (countries) => {
        return countries.map((_, index) => {
            return (
              isFetch && <Card key={`card_${index}`}
                  index={index}
                  borders={countries[index].borders}
                  flag={countries[index].flags.svg} 
                  name={countries[index].name.common} 
                  region={countries[index].region} 
                  capital={countries[index].capital} 
                  population={countries[index].population}
              />
            )
          });
    }
    if (isFetch){
        if(countries.length > 0){
          return (
            <div className="container-80">
              <div className="container-grid">
                {renderCountries(countries)}
              </div>
            </div>
          )
        }else{
          return(
            <div className="container-80">
              <h2>No se encontraron coincidencias</h2>
            </div>
          )
        }
    }else{
        return(        
          <div className="container-80">
            <h2>Cargando Combo...</h2>
          </div>
        )
    }
}
export default Countries;