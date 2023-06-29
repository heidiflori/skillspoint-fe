import React from "react";
import { BiSearch } from "react-icons/bi";
import { Container } from "react-bootstrap";

function SearchBar() {
    return (
        <Container className="d-flex justify-content-center w-25 mt-3 ">
                <input type="text" className = "form-control"placeholder="Search..." />
        </Container>
    )
}

export default SearchBar;