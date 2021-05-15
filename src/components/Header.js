import React from "react";
import PropTypes from "prop-types";

//Utilizando styled-components
import styled from "styled-components";

const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding: 1rem;
    font-weight: 700;
`;
const TextoHeader = styled.h1`
    font-size: 2rem;
    font-family: "Slabo 27px", serif;
    text-align: center;
`;

const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
};
Header.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default Header;
