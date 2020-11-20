import React from "react";
import Login from "./Login";
import Logout from "./Logout";

export default function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://mikehansen.io">
                    <h1>Aphid</h1>
                </a>

                <a
                    href="/"
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a href="/" className="navbar-item">
                        Home
                    </a>

                    <a href="/" className="navbar-item">
                        Source Code
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="/" className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a href="/" className="button is-info">
                                Log in
                            </a>
                            <a href="/" className="button is-info">
                                <Login />
                            </a>
                            <a href="/" className="button is-info">
                                <Logout />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
