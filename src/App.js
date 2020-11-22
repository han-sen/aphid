import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/global.scss";

function App() {
    return (
        <div className="App">
            <main>
                <Switch>
                    <Route
                        path="/dashboard"
                        render={(props) => {
                            return (
                                <>
                                    <NavBar />
                                    <Dashboard />
                                </>
                            );
                        }}
                    />
                    <Route
                        path="/"
                        render={(props) => {
                            return <Home />;
                        }}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;
