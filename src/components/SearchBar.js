import React from "react";


function SearchBar() {
    return (
        <div className="d-flex justify-content-end">
            <div className="input-group w-25 m-3">
                <input type="text" className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                    <span className="input-group-text bg-white d-flex align-items-center" style={{ height: "5vh" }}>
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;