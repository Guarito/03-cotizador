import React, { useState } from "react";
//Utilizando styled-components
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
    max-width: 60rem;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

function App() {
    const [resumen, guardarResumen] = useState({
        cotizacion: 0,
        datos: {
            marca: "",
            ano: "",
            plan: "",
        },
    });
    const [cargando, guardarCargando] = useState(false);
    const { cotizacion, datos } = resumen;
    return (
        <>
            <Contenedor>
                <Header titulo="Cotizador de seguros" />
                <ContenedorFormulario>
                    <Form
                        guardarResumen={guardarResumen}
                        guardarCargando={guardarCargando}
                    />
                    {cargando ? <Spinner /> : null}
                    {cotizacion > 0 && !cargando ? (
                        <Resumen datos={datos} />
                    ) : null}
                    {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
                </ContenedorFormulario>
            </Contenedor>
        </>
    );
}

export default App;
