import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { selectBug } from "../actions";
import { loadBugs } from "../actions";
import NewBug from "./NewBug";
import Modal from "./Modal";
import SideBar from "./SideBar";
import ExpandedBug from "./ExpandedBug";
import BugFeed from "./BugFeed";

const API = process.env.REACT_APP_API;

function Dashboard(props) {
    const [modalIsActive, setModalIsActive] = useState(false);
    useEffect(() => {
        if (props.user) {
            axios
                .get(`${API}/bugs/${props.user.googleId}`)
                .then(function (response) {
                    props.loadBugs(response.data);
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [props.user]);
    return (
        <section className="dashboard_wrap">
            <SideBar bugs={props.bugs} setModalIsActive={setModalIsActive} />
            <div className="dashboard_inner_wrap">
                <BugFeed />
                <ExpandedBug />
            </div>
            <Modal
                modalIsActive={modalIsActive}
                setModalIsActive={setModalIsActive}
                modalTitle="Add Bug"
                submitText="Add Bug"
            >
                <NewBug bugs={props.bugs} setModalIsActive={setModalIsActive} />
            </Modal>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        bugs: state.bugs,
        selectedBug: state.selectedBug,
        user: state.user,
    };
};

export default connect(mapStateToProps, {
    selectBug,
    loadBugs,
})(Dashboard);
