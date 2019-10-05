import React from 'react'
import CSVReader from "react-csv-reader";

const Navbar = ({ onFileLoaded }) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark  justify-content-between">
                <CSVReader 
                    cssClass="react-csv-input"
                    onFileLoaded={onFileLoaded}
                    inputStyle={{color: 'green'}}
                />
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </nav>
        </div>
    )
}

export default Navbar
