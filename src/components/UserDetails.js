import React from "react";
import { connect } from "react-redux";

function UserDetails(props) {
    return (
        <div className="user_wrap">
            <div className="user_avatar">
                <div className="user_avatar_inner">
                    <p>{props.user ? props.user.givenName.slice(0, 1) : "?"}</p>
                </div>
            </div>
            {props.user ? (
                <div className="user_details">
                    <h2>{props.user.givenName}</h2>
                    <p className="user_email">{props.user.email}</p>
                </div>
            ) : (
                <p>Please sign in...</p>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, {})(UserDetails);
