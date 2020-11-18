import React, { useState } from "react";
import { connect } from "react-redux";
import { selectFilter } from "../actions";

function FilterForm(props) {
    const [activeButton, setActiveButton] = useState("open");
    const [bugFilter, setBugFilter] = useState({
        status: "open",
        project: "",
    });
    const setFilterButton = (e) => {
        setActiveButton(e.target.value);
        changeFilter(e);
    };
    const setProjectFilter = (e) => {
        changeFilter(e);
    };
    const changeFilter = (e) => {
        setBugFilter({ ...bugFilter, [e.target.name]: e.target.value });
        props.selectFilter({ ...bugFilter, [e.target.name]: e.target.value });
    };
    return (
        <div className="filter_form_wrap">
            <div className="filter_status_group">
                <label htmlFor="filter">Bug Status:</label>
                <div className="filter_status_wrap">
                    <button
                        onClick={setFilterButton}
                        name="status"
                        value="open"
                        className={
                            activeButton === "open"
                                ? "filter-button active-button"
                                : "filter-button"
                        }
                    >
                        Open
                    </button>
                    <button
                        onClick={setFilterButton}
                        name="status"
                        value="closed"
                        className={
                            activeButton === "closed"
                                ? "filter-button active-button"
                                : "filter-button"
                        }
                    >
                        Closed
                    </button>
                    <button
                        onClick={setFilterButton}
                        name="status"
                        value=""
                        className={
                            activeButton === ""
                                ? "filter-button active-button"
                                : "filter-button"
                        }
                    >
                        All
                    </button>
                </div>
            </div>
            <div className="filter_project_group">
                <label htmlFor="filter">Project:</label>
                <div className="select is-rounded is-small">
                    <select
                        name="project"
                        id="projectForm"
                        onChange={setProjectFilter}
                    >
                        <option value="" key={1}>
                            All
                        </option>
                        {props.bugs.map((bug, i) => {
                            return (
                                <option value={bug.project} key={i + 1}>
                                    {bug.project}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bugs: state.bugs,
        selectedBug: state.selectedBug,
        filters: state.filters,
    };
};

export default connect(mapStateToProps, {
    selectFilter,
})(FilterForm);
