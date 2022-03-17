import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    const {index, name, flag, population, region, capital } = props;

    return (
        <Link className="App-link" to={`/country/${name}`}>
            <div className="card" title={index}>
                
                <div className="details">
                    <div className="title">
                        <h2>{name}</h2>
                    </div>
                    <p>{`Ciudad: ${population}`}</p>
                    <p>{`Compañia: ${region}`}</p>
                    <p>{`Fecha: ${capital}`}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;