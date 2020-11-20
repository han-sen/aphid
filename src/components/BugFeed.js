import React from "react";
import Bug from "./Bug";
import BugDropdown from "./BugDropdown";
import { connect } from "react-redux";
import { selectBug } from "../actions";

function BugFeed(props) {
    const checkFilters = (bug) => {
        if (props.filters.status && props.filters.project) {
            return (
                bug.status === props.filters.status &&
                bug.project === props.filters.project
            );
        } else if (props.filters.status && !props.filters.project) {
            return bug.status === props.filters.status;
        } else if (props.filters.project && !props.filters.status) {
            return bug.project === props.filters.project;
        }
        return true;
    };
    return (
        <>
            <div className="bugs_wrap">
                {props.bugs
                    .filter((bug) => checkFilters(bug))
                    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
                    .map((bug, i) => {
                        return (
                            <Bug
                                bug={bug}
                                key={bug.title + i}
                                selectedBug={props.selectedBug}
                                selectBug={props.selectBug}
                            />
                        );
                    })}
            </div>
            <BugDropdown bugs={props.bugs} />
        </>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        bugs: state.bugs,
        selectedBug: state.selectedBug,
        filters: state.filters,
    };
};

export default connect(mapStateToProps, {
    selectBug,
})(BugFeed);
