import React from "react";
import Login from "./Login";
import HeroSVG from "../aphid-hero.png";
import GitTab from "./GitTab";

export default function Home() {
    return (
        <>
            <GitTab />
            <section className="home_wrap">
                <div className="home_wrap_inner">
                    <div className="home_inner_panel">
                        <h1 className="home_title">Aphid</h1>
                        <p>
                            An open-source bug tracking dashboard for cataloging
                            your project's code issues.
                        </p>
                        <Login />
                        <a href="https://han-sen.github.io/aphid-demo/">
                            <button className="button is-info">
                                <i className="fas fa-bug"></i>View Demo
                            </button>
                        </a>
                    </div>
                    <div className="home_inner_panel">
                        <img src={HeroSVG} alt="hero" className="home_image" />
                    </div>
                </div>
            </section>
        </>
    );
}
