import React from "react";
import FilterForm from "./FilterForm";
import BugChart from "./BugChart";
import UserDetails from "./UserDetails";

export default function SideBar(props) {
    return (
        <div className="sidebar_wrap">
            <div className="admin_wrap">
                <UserDetails />
                <button
                    onClick={() => props.setModalIsActive(true)}
                    className="button is-primary"
                >
                    <i className="fas fa-bug"></i> Add Bug
                </button>
            </div>
            <BugChart bugs={props.bugs} />
            <FilterForm bugs={props.bugs} changeFilter={props.changeFilter} />
        </div>
    );
}
