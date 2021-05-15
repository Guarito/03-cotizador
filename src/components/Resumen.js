import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { PrimerLetraMayuscula } from "../helpers/Calcular";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
    list-style: none;
`;

const Resultado = ({ datos }) => {
    const { marca, ano, plan } = datos;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca:{PrimerLetraMayuscula(marca)}</li>
                <li>Año:{ano}</li>
                <li>Plan:{PrimerLetraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    );
};
Resultado.propTypes = {
    datos: PropTypes.object.isRequired,
};

export default Resultado;
