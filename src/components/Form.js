import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import {
    DiferenciaAnos,
    CalcularMarca,
    CalcularPlan,
} from "../helpers/Calcular";

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    border-radius: 0.3rem;
    appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Button = styled.button`
    background-color: #00838f;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    width: 100%;
    padding: 1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.3rem;
    margin-top: 2rem;
    transition: background-color 0.1s ease-in;
    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`;
const Error = styled.div`
    background-color: rgba(255, 50, 0, 0.7);
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({ guardarResumen, guardarCargando }) => {
    const [datos, guardarDatos] = useState({
        marca: "",
        ano: "",
        plan: "",
    });

    const [error, guardarError] = useState(false);

    const { marca, ano, plan } = datos;

    const obtenerInformacion = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    const cotizarSeguro = (e) => {
        e.preventDefault();
        if (marca.trim() === "" || ano.trim() === "" || plan.trim() === "") {
            guardarError(true);
            return;
        }
        guardarError(false);
        console.table(datos);

        //Base (costo minimo para automoviles a cotizar)
        const base = 2000;

        //Obtener la diferencia de anos
        const diferencia = DiferenciaAnos(ano);

        //Por cada ano de vejez del auto, hay que restar un 3% del valor
        const impuesto = base * 0.03;
        let resultado = base - impuesto * diferencia;
        console.log("Resultado por cantidad de años:", resultado);

        //Cada marca tiene un incremento distinto sobre el valor actual. Americano: 20%, asiatico:10%, europeo: 30%
        const calcularMarca = CalcularMarca(marca);
        resultado = (resultado * calcularMarca).toFixed(2);
        console.log("Incremento costo por marca (%resultado)", resultado);

        //Plan basico aumenta 20%, premium un 50%
        const calcularPlan = CalcularPlan(plan);
        resultado = (resultado * calcularPlan).toFixed(2);
        console.log("Incremento por plan ", resultado);

        //Guardamos el resumen de los montos totales
        guardarCargando(true);

        setTimeout(() => {
            guardarCargando(false);
            guardarResumen({
                cotizacion: Number(resultado),
                datos: datos, //datos obtenidos en el state
            });
        }, 1000);
    };

    return (
        <div>
            <form onSubmit={cotizarSeguro}>
                <Campo>
                    {error ? (
                        <Error>Todos los campos son obligatorios.</Error>
                    ) : null}
                </Campo>
                <Campo>
                    <Label htmlFor="marca">Marca</Label>
                    <Select
                        name="marca"
                        id="marca"
                        value={marca}
                        onChange={obtenerInformacion}
                    >
                        <option value="">--Seleccionar--</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label htmlFor="ano">Año</Label>
                    <Select
                        name="ano"
                        id="ano"
                        value={ano}
                        onChange={obtenerInformacion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Plan</Label>
                    <InputRadio
                        type="radio"
                        name="plan"
                        id="basico"
                        value="basico"
                        checked={plan === "basico"}
                        onChange={obtenerInformacion}
                    />
                    <Label htmlFor="basico">Básico</Label>
                    <InputRadio
                        type="radio"
                        name="plan"
                        id="premium"
                        value="premium"
                        checked={plan === "premium"}
                        onChange={obtenerInformacion}
                    />
                    <Label htmlFor="premium">Premium</Label>
                </Campo>
                <Campo>
                    <Button type="submit">Cotizar</Button>
                </Campo>
            </form>
        </div>
    );
};
Form.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired,
};

export default Form;
