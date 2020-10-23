import React from "react";
import { selectBug } from "./actions/index.js";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import "./styles/global.scss";

function App() {
    return (
        <div className="App">
            <main>
                <NavBar />
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
