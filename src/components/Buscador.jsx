// import React from "react";
import React, { useState } from "react";

import debounce from 'lodash.debounce';

import useGetOferta from '../methods/useGetOferta'
const Buscador = () => {


    
    const initialForm = {
        artist: ""
      };

      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.defaultValue,
        });
      };


    const [form, setForm] = useState(initialForm);
   

    const TaskRegisterForm = async () => {
    
        
        //Tomamos el valor del input
        // const termino = this.busquedaRef.current.value;
        
        // console.log('DATO RECIBIO DE LA CAJA DE TEXTO: '+ task.name);

        //Y lo enviamos al componente principal
        //this.props.datosBusqueda(termino);
        
        // const ofertaArg = target.value;
        // this.obtenerListOfertas(ofertaArg);

        // useGetOferta(ofertaArg).then((data)=>{
        //     console.log("obtenerListOfertas: "+ data)
        // })

	};

    const handleSubmit = (e) => {
        e.preventDefault();
    
        
        console.log("OFERTA A BUSCAR:" + form.artist);
        //	TaskRegisterForm();
        // handleSearch(form);
        // setForm(initialForm);
        // setIsDisabled(false);
      };


    return (
		<>
			
            <form className="search" onSubmit={handleSubmit} >
                <ion-icon name="search-outline"></ion-icon>
                <input className="search-input" 
                    type="text"
                   
                  
						name="name"
                        onChange={handleChange}
                        
						// defaultValue={task.name}
                        defaultValue={form.artist}
						required

        
                    placeholder="Busqueda General..."/>

                <button type="submit" className="btn btn-primary">
                    BUSCAR
				</button>

            </form>

			
		</>
	);

    
    
    
}

export default Buscador;