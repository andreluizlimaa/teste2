import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "./propostas.css";
import livro from "./livro.png"


const Propostas = () => {
    return(
            <section className='container'> 
                        <div className='propostas_container'>
                            <div className='header'>
                                <h3>Propostas</h3>
                            </div>
                            <div className='proposta_exemplo'></div>
                            <div className='proposta_exemplo'></div>
                            <div className='proposta_exemplo'></div>
                
                
                </div>
            </section>

        
        
    );
}

export default Propostas;