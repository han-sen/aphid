import React from "react";
import Login from "./Login";
import Logout from "./Logout";

export default function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <h1>
                        <i className="fas fa-bug"></i>Aphid
                    </h1>
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
                    <a
                        href="/https://github.com/han-sen/aphid"
                        className="navbar-item"
                    >
                        Source Code
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Login />
                            <Logout />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
