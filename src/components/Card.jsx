import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    const {index, name, flag, population, region, capital } = props;

    return (
        <Link className="App-link" to={`/country/${name}`}>
            <div className="card" title={index}>
                <div className="image-container">
                    <img src={flag} alt={name +" flag"} className="image"/>
                </div>
                <div className="details">
                    <div className="title">
                        <h2>{name}</h2>
                    </div>
                    <p>{`Population: ${population}`}</p>
                    <p>{`Region: ${region}`}</p>
                    <p>{`Capital: ${capital}`}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;