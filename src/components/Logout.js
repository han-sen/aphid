import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";

const clientId =
    "228831500419-1pdt6pga3o2tu5c25ueio3mekuc0avbs.apps.googleusercontent.com";

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
