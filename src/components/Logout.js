import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login(props) {
    const history = useHistory();
    const onSuccess = () => {
        console.log("user has logged out");
        props.signOut();
        history.push("/");
    };
    const onFailure = (response) => {
        console.log(response.profileObj);
    };
    return (
        <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={onSuccess}
            onLogOutFailure={onFailure}
            render={(renderProps) => (
                <button
                    className="button is-info"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    Logout
                </button>
            )}
        />
    );
}
export default connect(null, { signIn, signOut })(Login);
