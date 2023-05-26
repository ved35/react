import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from '../App'

function Navbar() {

    const { setSearch ,serach } = useContext(Wrapper);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/About'>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div>
                                    <a className="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#/">Action</a></li>
                                        <li><a className="dropdown-item" href="#/">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Contact'>Contact-us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Products'>Products</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="text" value={serach} placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar