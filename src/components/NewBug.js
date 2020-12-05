import React, { useState } from "react";
import { connect } from "react-redux";
import { addBug } from "../actions";
import axios from "axios";

function NewBug(props) {
    const [input, setInput] = useState({
        title: "",
        project: "",
        severity: "moderate",
        blameFile: "",
        summary: "",
        readOut: "",
        status: "open",
        userId: "",
    });
    const handleChange = (event) => {
        setInput({ ...input, [event.target.id]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const newBug = {
            ...input,
            userId: props.user.googleId,
        };
        props.addBug(newBug);
        axios
            .post(`${process.env.REACT_APP_API}/bugs`, {
                newBug,
            })
            .then((response) => {
                console.log(response);
                props.setModalIsActive(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="new_bug_wrap">
            <form onSubmit={handleSubmit} className="new_bug_form">
                <div className="field">
                    <label className="label" htmlFor="title">
                        Title:
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="title"
                        id="title"
                        value={input.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label className="label" htmlFor="project">
                        Project:
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="project"
                        id="project"
                        value={input.project}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label className="label" htmlFor="blameFile">
                        Blame File:
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="blameFile"
                        id="blameFile"
                        value={input.blameFile}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label className="label" htmlFor="summary">
                        Summary:
                    </label>
                    <textarea
                        className="textarea"
                        type="text"
                        name="summary"
                        id="summary"
                        value={input.summary}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label className="label" htmlFor="readOut">
                        Error Readout:
                    </label>
                    <input
                        className="input"
                        type="text"
                        name="readOut"
                        id="readOut"
                        value={input.readOut}
                        onChange={handleChange}
                    />
                </div>
                <div className="field is-grouped last-row">
                    <label className="label" htmlFor="severity">
                        Severity:
                    </label>
                    <div className="select">
                        <select
                            name="severity"
                            id="severity"
                            onChange={handleChange}
                            value={input.severity}
                        >
                            <option value="moderate">Moderate</option>
                            <option value="minor">Minor</option>
                            <option value="breaking">Breaking</option>
                        </select>
                    </div>
                    <label className="label" htmlFor="status">
                        Bug Status:
                    </label>
                    <div className="select">
                        <select
                            name="status"
                            id="status"
                            onChange={handleChange}
                            value={input.status}
                        >
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-link">
                            Add Bug
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        addBug: state.addBug,
        user: state.user,
    };
};

export default connect(mapStateToProps, {
    addBug,
})(NewBug);
