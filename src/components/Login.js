import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { signIn } from "../actions/index";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Login(props) {
    const history = useHistory();
    const onSuccess = (response) => {
        console.log(response.profileObj);
        props.signIn(response.profileObj);
        history.push("/dashboard");
    };
    const onFailure = (response) => {
        console.log(`Login failed: ${response}`);
    };
    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Login / Signup"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            // isSignedIn={true}
            render={(renderProps) => (
                <button
                    className="button is-primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    <i className="fab fa-google"></i> Login / Signup
                </button>
            )}
        />
    );
}

const mapStateToProps = (state) => {
    return { signIn: state.signIn, user: state.user };
};

export default connect(mapStateToProps, { signIn })(Login);
