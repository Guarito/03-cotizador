import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
`;
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;
const MensajeTotal = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
`;

const Resultado = ({ cotizacion }) => {
    return cotizacion === 0 ? (
        <Mensaje>Selecciona marca, año y tipo de seguro.</Mensaje>
    ) : (
        <ResultadoCotizacion>
            <TransitionGroup component="p" className="resultado">
                <CSSTransition
                    key={cotizacion}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="resultado"
                >
                    <MensajeTotal>El total es: {cotizacion} </MensajeTotal>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    );
};
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
