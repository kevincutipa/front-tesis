
import React from 'react'
//import { api } from "../constants/api";

import axios from "axios";

const useGetOferta = async (ofertaABuscar) => {
  const res = axios({
		method: "GET",
		url: `https://web-app-jobs-2022-api.herokuapp.com/api/v1/getJobs?trabajo=${ofertaABuscar}`,
	}).then(function (response) {
    console.log(response);
		const { data } = response;
		return data;
	});
	return res;

  // let dataArray=[]; 
  // const url =`https://web-app-jobs-2022-api.herokuapp.com/api/v1/getJobs?trabajo=${ofertaABuscar}`
  //  //const url = "https://restcountries.com/v3.1/all/";
  //  const obtenerOferta= await fetch(url)
  //  .then(response => response.json())
  //  .then(data => {
  //    let countries = Array.from(data);
  //    //Actualizar el estado con los valores
  //  //   this.setState({
  //  //     paises: countries,
  //  //     filtered: countries,
  //  //     isFetch: true
  //  //   });
  //   console.log(countries);

  //   dataArray = countries;
    
  //   return dataArray;
  //  })
  //  .catch(error => {
  //    console.log(error);

  //  })
  //  return dataArray;


  
}

export default useGetOferta;
